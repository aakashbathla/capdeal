/* eslint-disable */
import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./EditProjectSchema";
import apis from "../../../constants/apis/services";
import { fetchData, updateData } from "../../../utils/Utils";
import "./Project.scss";

const EditProject = (props) => {
  const history = useHistory();
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const updateFormData = (data) => {
    data.rera_no = parseInt(data.rera_no);
    data.video = parseInt(data.video.id);
    data.broucher = parseInt(data.broucher.id);
    data.mediaFile = data.media
      .map((val) => {
        return val.id;
      })
      .toString();
    if (data.amenities) {
      for (var i = 0; i < data.amenities.length; i++) {
        data.amenities[i].mediaFile = data.amenities[i].media
          .map((val) => {
            return val.id;
          })
          .toString();
      }
    }
    setUpdateFormDataValue(data);
  };
  const redirectFunction = () => {
    props.history.push({
      pathname: "/app/project-list",
    });
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      fetchData(
        `${apis.projectListingUrl}/${props.match.params.id}`,
        updateFormData
      );
    }
  }, []);
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      {updateFormDataValue && (
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={updateFormDataValue}
          onSubmit={({ formData }, e) => {
            e.preventDefault();
            if (formData && formData.mediaFile) {
              formData.media = formData.mediaFile.split(",").map(Number);
            }
            delete formData.mediaFile;
            if (formData && formData.amenities) {
              formData.amenities.map((val, key) => {
                formData.amenities[key].media = val.mediaFile
                  ? val.split(",").map(Number)
                  : [];
              });
              for (var i = 0; i < formData.amenities.length; i++) {
                delete formData.amenities[i].mediaFile;
              }
            }
            updateData(
              `${apis.projectListingUrl}${props.match.params.id}`,
              formData,
              redirectFunction
            );
          }}
        />
      )}
    </div>
  );
};

export default EditProject;
