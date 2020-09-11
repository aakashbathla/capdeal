/* eslint-disable */
import Form from "@rjsf/core";
import React from "react";
import { useHistory } from "react-router";
import { schema, uiSchema, fields } from "./AddProjectSchema";
import { addData, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
const AddProject = () => {
  const history = useHistory();
  const redirectFunction = () => {
    history.push({
      pathname: "/app/project-list",
    });
  };
  const errorHandler = (err) => {
    console.log(errorGenerator(err));
  };
  return (
    <div>
      <div className="form-header">
        <span className="back-btn" onClick={() => history.goBack()}>
          <i className="zmdi zmdi-arrow-left"></i>
        </span>
        <span className="form-header__title">Add Project</span>
      </div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        fields={fields}
        onSubmit={({ formData }, e) => {
          console.log(formData);
          e.preventDefault();
          if (formData && formData.mediaFile) {
            formData.media = formData.mediaFile.split(",").map(Number);
          }
          if (formData && formData.amenities) {
            formData.amenities.map((val, key) => {
              formData.amenities[key].media = val.mediaFile
                .split(",")
                .map(Number);
            });
          }
          formData.price_range = [3, 4];
          addData(
            apis.projectListingUrl,
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

export default AddProject;
