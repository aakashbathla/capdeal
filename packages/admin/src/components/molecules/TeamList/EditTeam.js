import Form from "@rjsf/core";
import React from "react";
import { schema, formData } from "./EditTeamSchema";

const EditTeam = () => {
  return <Form schema={schema} formData={formData} />;
};

export default EditTeam;
