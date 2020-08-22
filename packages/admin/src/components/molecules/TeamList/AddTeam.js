import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema } from "./AddTeamSchema";

const AddTeam = () => {
  return <Form schema={schema} uiSchema={uiSchema} />;
};

export default AddTeam;
