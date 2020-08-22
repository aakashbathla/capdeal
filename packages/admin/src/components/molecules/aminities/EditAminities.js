import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema, formData } from "./EditAminitiesSchema";

const EditAminities = () => {
  return <Form schema={schema} uiSchema={uiSchema} formData={formData} />;
};

export default EditAminities;
