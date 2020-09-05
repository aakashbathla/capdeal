/* eslint-disable */
import Form from "@rjsf/core";
import React from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddProjectSchema";
import { addData } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
const AddProject = () => {
  const history = useHistory();
  const redirectFunction = () => {
    history.push({
      pathname: "/app/project-list",
    });
  };
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      <Form
        schema={schema}
        uiSchema={uiSchema}
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
          addData(apis.projectListingUrl, formData, redirectFunction);
        }}
      />
    </div>
  );
};

export default AddProject;
