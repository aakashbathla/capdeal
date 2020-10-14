import Form from "@rjsf/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddAminitiesSchema";
import apis from "../../../constants/apis/services";
import { addData, errorGenerator, transformErrors } from "../../../utils/Utils";
import Loader from "../../atoms/Loader";
const AddAminities = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const redirectFunction = () => {
    setLoaderIndicator(false);
    history.push({
      pathname: "/app/aminities-list",
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
        transformErrors={transformErrors}
        uiSchema={uiSchema}
        noHtml5Validate={true}
        onSubmit={({ formData }, e) => {
          setLoaderIndicator(true);
          e.preventDefault();
          addData(
            apis.aminitiesListingUrl,
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

export default AddAminities;
