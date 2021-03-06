/* eslint-disable */
import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./EditDeveloperSchema";
import apis from "../../../constants/apis/services";
import Loader from "../../atoms/Loader";
import {
  fetchData,
  updateData,
  errorGenerator,
  transformErrors,
} from "../../../utils/Utils";
import "./Developer.scss";

const EditDeveloper = (props) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const updateFormData = (data) => {
    setLoaderIndicator(false);
    data.imageFile = data.image || undefined;
    setUpdateFormDataValue(data);
  };
  const redirectFunction = () => {
    setLoaderIndicator(false);
    props.history.push({
      pathname: "/app/developer-list",
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
        `${apis.developerListingUrl}/${props.match.params.id}`,
        updateFormData,
        null,
        errorHandler
      );
    }
  }, []);
  const handleOnChange = ({ formData }) => {
    console.log("aakash", formData);
  };
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
          safeRenderCompletion={true}
          schema={schema}
          uiSchema={uiSchema}
          formData={updateFormDataValue}
          onChange={(args) => handleOnChange(args)}
          transformErrors={transformErrors}
          noHtml5Validate={true}
          onSubmit={({ formData }, e) => {
            setLoaderIndicator(true);
            e.preventDefault();
            if (formData && formData.imageFile) {
              formData.image = parseInt(formData.imageFile);
            }
            delete formData.imageFile;
            updateData(
              `${apis.developerListingUrl}/${props.match.params.id}`,
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

export default EditDeveloper;
