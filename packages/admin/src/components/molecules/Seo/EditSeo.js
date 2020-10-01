/* eslint-disable */
import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./EditSeoSchema";
import apis from "../../../constants/apis/services";
import {
  fetchData,
  updateData,
  errorGenerator,
  transformErrors,
} from "../../../utils/Utils";
import { withRouter } from "react-router";

const EditSeo = (props) => {
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const [error, setError] = useState(null);
  const updateFormData = (data) => {
    setUpdateFormDataValue(data);
  };
  const history = useHistory();
  const redirectFunction = () => {
    props.history.push({
      pathname: "/app/seo-list",
    });
  };
  const errorHandler = (err) => {
    setError(errorGenerator(err));
    console.log(errorGenerator(err));
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      fetchData(
        `${apis.seoListingUrl}/${props.match.params.id}`,
        updateFormData,
        null,
        errorHandler
      );
    }
  }, []);
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      {error && (
        <div className="error">
          {error.map((val, key) => (
            <div>{val}</div>
          ))}
        </div>
      )}
      {updateFormDataValue && (
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={updateFormDataValue}
          transformErrors={transformErrors}
          noHtml5Validate={true}
          onSubmit={({ formData }, e) => {
            e.preventDefault();
            updateData(
              `${apis.seoListingUrl}/${props.match.params.id}`,
              formData,
              redirectFunction,
              null,
              errorHandler
            );
          }}
        />
      )}
    </div>
  );
};

export default withRouter(EditSeo);
