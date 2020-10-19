import React, { useState } from "react";
import { useHistory } from "react-router";
import { addData, errorGenerator, transformErrors } from "utils/Utils";
import { schema, uiSchema, fields } from "./AddUserPropertiesSchema";
import Form from "@rjsf/core";
import apis from "constants/apis/services";
import "./UserProperties.scss";

const AddUserProperties = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const redirectFunction = () => {
    history.push({
      pathname: "/user/properties",
    });
  };
  const errorHandler = (err) => {
    setError(errorGenerator(err));
  };
  return (
    <div className="add-properties">
      <div className="row">
        <div className="col-12 col-md-12">
          <span className="back-btn" onClick={() => history.goBack()}>
            <i className="zmdi zmdi-arrow-left"></i>
          </span>
          <h2 className="d-inline-block ml-2">Add Properties</h2>
        </div>
      </div>
      <hr className="mb-4 pb-3" />
      {error && (
        <div className="error">
          {error.map((val, key) => (
            <div className="d-none">{val}</div>
          ))}
        </div>
      )}
      <Form
        schema={schema}
        uiSchema={uiSchema}
        fields={fields}
        noHtml5Validate={true}
        transformErrors={transformErrors}
        onSubmit={({ formData }, e) => {
          e.preventDefault();
          addData(
            apis.callBackUrl,
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

export default AddUserProperties;
