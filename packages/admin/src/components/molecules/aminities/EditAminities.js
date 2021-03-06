/* eslint-disable */
import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./EditAminitiesSchema";
import apis from "../../../constants/apis/services";
import Loader from "../../atoms/Loader";
import {
  fetchData,
  updateData,
  errorGenerator,
  transformErrors,
} from "../../../utils/Utils";
import { withRouter } from "react-router";

const EditAminities = (props) => {
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const [error, setError] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const updateFormData = (data) => {
    setLoaderIndicator(false);
    setUpdateFormDataValue(data);
  };
  const history = useHistory();
  const redirectFunction = () => {
    setLoaderIndicator(false);
    props.history.push({
      pathname: "/app/aminities-list",
    });
  };
  const errorHandler = (err) => {
    setLoaderIndicator(false);
    setError(errorGenerator(err));
  };
  useEffect(() => {
    setLoaderIndicator(true);
    if (props && props.match && props.match.params && props.match.params.id) {
      fetchData(
        `${apis.aminitiesListingUrl}/${props.match.params.id}`,
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
          noHtml5Validate={true}
          transformErrors={transformErrors}
          onSubmit={({ formData }, e) => {
            e.preventDefault();
            updateData(
              `${apis.aminitiesListingUrl}/${props.match.params.id}`,
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

export default withRouter(EditAminities);
