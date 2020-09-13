import Form from "@rjsf/core";
import React from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddDeveloperSchema";
import apis from "../../../constants/apis/services";
import { addData, errorGenerator, transformErrors } from "../../../utils/Utils";
import "./Developer.scss";

const AddDeveloper = () => {
  const history = useHistory();
  const redirectFunction = () => {
    history.push({
      pathname: "/app/developer-list",
    });
  };
  const errorHandler = (err) => {
    console.log(errorGenerator(err));
  };
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        noHtml5Validate={true}
        transformErrors={transformErrors}
        onSubmit={({ formData }, e) => {
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
