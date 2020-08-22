import Form from "@rjsf/core";
import React from "react";
import { schema, formData, uiSchema } from "./EditTeamSchema";

const EditTeam = () => {
  return <Form schema={schema} formData={formData} uiSchema={uiSchema} />;
};

export default EditTeam;
