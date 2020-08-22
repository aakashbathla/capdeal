import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema } from "./AddAminitiesSchema";

const AddAminities = () => {
  return <Form schema={schema} uiSchema={uiSchema} />;
};

export default AddAminities;
