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
import Loader from "../../atoms/Loader";

const EditSeo = (props) => {
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const [error, setError] = useState(null);
  const updateFormData = (data) => {
    setLoaderIndicator(false);
    setUpdateFormDataValue(data);
  };
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const history = useHistory();
  const redirectFunction = () => {
    setLoaderIndicator(false);
    props.history.push({
      pathname: "/app/seo-list",
    });
  };
  const errorHandler = (err) => {
    setLoaderIndicator(false);
    setError(errorGenerator(err));
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      setLoaderIndicator(true);
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
      <Loader loaderIndicator={loaderIndicator} />
      {updateFormDataValue && (
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={updateFormDataValue}
          transformErrors={transformErrors}
          noHtml5Validate={true}
          onSubmit={({ formData }, e) => {
            e.preventDefault();
            setLoaderIndicator(true);
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
