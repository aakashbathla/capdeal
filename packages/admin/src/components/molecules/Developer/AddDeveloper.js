import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema } from "./AddDeveloperSchema";

const AddDeveloper = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Form schema={schema} uiSchema={uiSchema} />
    </div>
  ) 
};

export default AddDeveloper;
