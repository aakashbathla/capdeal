import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema, formData } from "./EditAminitiesSchema";
import apis from "../../../constants/apis/services";
import { fetchData, updateData } from "../../../utils/Utils";
import { withRouter } from "react-router";

const EditAminities = (props) => {
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const updateFormData = (data) => {
    setUpdateFormDataValue(data);
  };
  const history = useHistory();
  const redirectFunction = () => {
    props.history.push({
      pathname: "/app/aminities-list",
    });
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      fetchData(
        `${apis.aminitiesListingUrl}/${props.match.params.id}`,
        updateFormData
      );
    }
  }, []);
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <span className="back-btn" onClick={() => history.goBack()}>
        <i className="zmdi zmdi-arrow-left"></i>
      </span>
      {updateFormDataValue && (
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={updateFormDataValue}
          onSubmit={({ formData }, e) => {
            e.preventDefault();
            updateData(
              `${apis.aminitiesListingUrl}/${props.match.params.id}`,
              formData,
              redirectFunction
            );
          }}
        />
      )}
    </div>
  );
};

export default withRouter(EditAminities);
