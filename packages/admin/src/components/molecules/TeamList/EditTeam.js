import Form from "@rjsf/core";
import React from "react";
import { schema, formData, uiSchema } from "./EditTeamSchema";

const EditTeam = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Form schema={schema} formData={formData} uiSchema={uiSchema} />
    </div>
  )
};

export default EditTeam;
