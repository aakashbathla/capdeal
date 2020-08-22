import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema, formData } from "./EditDeveloperSchema";
import apis from "../../../constants/apis/services";
import { fetchData, updateData } from "../../../utils/Utils";

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
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      console.log("aakash");
      fetchData(
        `${apis.developerListingUrl}/${props.match.params.id}`,
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
            updateData(
              `${apis.developerListingUrl}/${props.match.params.id}`,
              formData,
              redirectFunction
            );
          }}
        />
      )}
    </div>
  );
};

export default EditDeveloper;
