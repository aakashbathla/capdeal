import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema } from "./AddDeveloperSchema";

const AddDeveloper = () => {
  return <Form schema={schema} uiSchema={uiSchema} />;
};

export default AddDeveloper;
