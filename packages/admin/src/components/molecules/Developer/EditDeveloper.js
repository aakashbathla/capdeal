/* eslint-disable */
import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./EditDeveloperSchema";
import apis from "../../../constants/apis/services";
import { fetchData, updateData, errorGenerator } from "../../../utils/Utils";
import "./Developer.scss";

const EditDeveloper = (props) => {
  const history = useHistory();
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const updateFormData = (data) => {
    setUpdateFormDataValue(data);
  };
  const redirectFunction = () => {
    props.history.push({
      pathname: "/app/developer-list",
    });
  };
  const errorHandler = (err) => {
    console.log(errorGenerator(err));
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      fetchData(
        `${apis.developerListingUrl}/${props.match.params.id}`,
        updateFormData,
        null,
        errorHandler
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
            updateData(
              `${apis.developerListingUrl}/${props.match.params.id}`,
              formData,
              redirectFunction,
              null,
              errorHandler
            );
          }}
        />
      )}
    </div>
  );
};

export default EditDeveloper;
