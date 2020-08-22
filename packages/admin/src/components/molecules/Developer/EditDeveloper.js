import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema, formData } from "./EditDeveloperSchema";

const EditDeveloper = () => {
  return <Form schema={schema} uiSchema={uiSchema} formData={formData} />;
};

export default EditDeveloper;
