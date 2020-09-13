import Form from "@rjsf/core";
import React from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddAminitiesSchema";
import apis from "../../../constants/apis/services";
import { addData, errorGenerator, transformErrors } from "../../../utils/Utils";

const AddAminities = () => {
  const history = useHistory();
  const redirectFunction = () => {
    history.push({
      pathname: "/app/aminities-list",
    });
  };
  const errorHandler = (err) => {
    console.log(errorGenerator(err));
  };
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      <Form
        schema={schema}
        transformErrors={transformErrors}
        uiSchema={uiSchema}
        noHtml5Validate={true}
        onSubmit={({ formData }, e) => {
          e.preventDefault();
          addData(
            apis.aminitiesListingUrl,
            formData,
            redirectFunction,
            null,
            errorHandler
          );
        }}
      />
    </div>
  );
};

export default AddAminities;
