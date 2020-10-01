import Form from "@rjsf/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddSeoSchema";
import apis from "../../../constants/apis/services";
import { addData, errorGenerator, transformErrors } from "../../../utils/Utils";

const AddSeo = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const redirectFunction = () => {
    history.push({
      pathname: "/app/seo-list",
    });
  };
  const errorHandler = (err) => {
    setError(errorGenerator(err));
  };
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      {error && (
        <div className="error">
          {error.map((val, key) => (
            <div>{val}</div>
          ))}
        </div>
      )}
      <Form
        schema={schema}
        uiSchema={uiSchema}
        transformErrors={transformErrors}
        noHtml5Validate={true}
        onSubmit={({ formData }, e) => {
          e.preventDefault();
          addData(
            apis.seoListingUrl,
            formData,
            redirectFunction,
            null,
            errorHandler
          );
        }}
      />
    </div>
  );
};

export default AddSeo;
