import Form from "@rjsf/core";
import React from "react";
import { useHistory } from "react-router";
import { schema, uiSchema, formData } from "./EditDeveloperSchema";

const EditDeveloper = () => {
  const history = useHistory();
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      <Form schema={schema} uiSchema={uiSchema} formData={formData} />
    </div>
  )
};

export default EditDeveloper;
