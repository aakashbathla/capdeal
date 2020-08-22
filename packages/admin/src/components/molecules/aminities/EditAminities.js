import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema, formData } from "./EditAminitiesSchema";

const EditAminities = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Form schema={schema} uiSchema={uiSchema} formData={formData} />
    </div>
  ) 
};

export default EditAminities;
