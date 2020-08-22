import Form from "@rjsf/core";
import React from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddDeveloperSchema";
import apis from "../../../constants/apis/services";
import { addData } from "../../../utils/Utils";
import "./Developer.scss";

const AddDeveloper = () => {
  const history = useHistory();
  const redirectFunction = () => {
    history.push({
      pathname: "/app/developer-list",
    });
  };
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={({ formData }, e) => {
          e.preventDefault();
          addData(apis.developerListingUrl, formData, redirectFunction);
        }}
      />
    </div>
  );
};

export default AddDeveloper;
