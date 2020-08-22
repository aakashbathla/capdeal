import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema } from "./AddTeamSchema";

const AddTeam = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Form schema={schema} uiSchema={uiSchema} />
    </div>
  )
};

export default AddTeam;
