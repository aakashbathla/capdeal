import Form from "@rjsf/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddDeveloperSchema";
import apis from "../../../constants/apis/services";
import { addData, errorGenerator, transformErrors } from "../../../utils/Utils";
import Loader from "../../atoms/Loader";
import "./Developer.scss";

const AddDeveloper = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const redirectFunction = () => {
    setLoaderIndicator(false);
    history.push({
      pathname: "/app/developer-list",
    });
  };
  const errorHandler = (err) => {
    setLoaderIndicator(false);
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
      <Loader loaderIndicator={loaderIndicator} />
      <Form
        schema={schema}
        uiSchema={uiSchema}
        noHtml5Validate={true}
        transformErrors={transformErrors}
        onSubmit={({ formData }, e) => {
          setLoaderIndicator(true);
          e.preventDefault();
          if (formData && formData.imageFile) {
            formData.image = parseInt(formData.imageFile);
          }
          delete formData.imageFile;
          addData(
            apis.developerListingUrl,
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

export default AddDeveloper;
