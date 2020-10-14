import Form from "@rjsf/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema } from "./AddTeamSchema";
import apis from "../../../constants/apis/services";
import { addData, errorGenerator, transformErrors } from "../../../utils/Utils";
import Loader from "../../atoms/Loader";

const AddTeam = () => {
  let data = {};
  const history = useHistory();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const redirectFunction = () => {
    setLoaderIndicator(false);
    history.push({
      pathname: "/app/team-list",
    });
  };
  const errorHandler = (err) => {
    setLoaderIndicator(false);
    setFormData(data);
    setError(errorGenerator(err));
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
      <Form
        schema={schema}
        uiSchema={uiSchema}
        noHtml5Validate={true}
        transformErrors={transformErrors}
        formData={formData}
        onSubmit={({ formData }, e) => {
          setLoaderIndicator(true);
          e.preventDefault();
          data = Object.assign(data, formData);
          addData(apis.teamUrl, formData, redirectFunction, null, errorHandler);
        }}
      />
    </div>
  );
};

export default AddTeam;
