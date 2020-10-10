import React, { useState } from "react";
import { useHistory } from "react-router";
import { addData, errorGenerator, transformErrors } from "utils/Utils";
import { schema, uiSchema } from "./CallFormSchema";
import Form from "@rjsf/core";
import apis from "constants/apis/services";
import "./CallBackForm.scss";

const CallBackForm = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const redirectFunction = () => {

    history.push({
      pathname: "/project-list",
    });
  };
  const errorHandler = (err) => {
    setError(errorGenerator(err));
  };
  return (
    <div className="call-back-form">
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

export default CallBackForm;
