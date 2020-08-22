import Form from "@rjsf/core";
import React from "react";
import { schema, uiSchema } from "./AddAminitiesSchema";
import apis from "../../../constants/apis/services";
import { addData } from "../../../utils/Utils";
import { useHistory } from "react-router";
const AddAminities = () => {
  const history = useHistory();
  const redirectFunction = () => {
    history.push({
      pathname: "/app/aminities-list",
    });
  };
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={({ formData }, e) => {
          e.preventDefault();
          addData(apis.aminitiesListingUrl, formData, redirectFunction);
        }}
      />
    </div>
  );
};

export default AddAminities;
