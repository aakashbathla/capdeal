import Form from "@rjsf/core";
import React from "react";
import { schema } from "./AddTeamSchema";

const AddTeam = () => {
  return <Form schema={schema} />;
};

export default AddTeam;
