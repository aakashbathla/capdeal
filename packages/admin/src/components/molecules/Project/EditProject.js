/* eslint-disable */
import Form from "@rjsf/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { schema, uiSchema, fields } from "./EditProjectSchema";
import apis from "../../../constants/apis/services";
import {
  fetchData,
  updateData,
  errorGenerator,
  transformErrors,
} from "../../../utils/Utils";
import "./Project.scss";
import Loader from "../../atoms/Loader";

const EditProject = (props) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [updateFormDataValue, setUpdateFormDataValue] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const updateFormData = (data) => {
    setLoaderIndicator(false);
    if (data.rera_no) {
      data.rera_no = parseInt(data.rera_no);
    }
    if (data.video && data.video.id) {
      data.video = parseInt(data.video.id);
    }
    if (data.broucher && data.broucher.id) {
      data.broucher = parseInt(data.broucher.id);
    }
    if (data.media) {
      data.mediaFile = data.media;
      delete data.media;
    }
    if (data && data.price_range) {
      data.price_range_min = parseFloat(data.price_range[0]);
      data.price_range_max = parseFloat(data.price_range[1]);
    }
    if (data.amenities) {
      for (var i = 0; i < data.amenities.length; i++) {
        data.amenities[i].mediaFile = data.amenities[i].media;
        delete data.amenities[i].media;
      }
    }
    if (data.features) {
      for (var i = 0; i < data.features.length; i++) {
        data.features[i].mediaFile = data.features[i].media || undefined;
        delete data.features[i].media;
      }
    }
    setUpdateFormDataValue(data);
  };
  const redirectFunction = () => {
    setLoaderIndicator(false);
    props.history.push({
      pathname: "/app/project-list",
    });
  };
  const errorHandler = (err) => {
    setLoaderIndicator(false);
    setError(errorGenerator(err));
  };
  const handleOnChange = ({ formData }) => {
    for (const property in formData) {
      console.log(`${property}: ${formData[property]}`);
      if(formData[property] == null){
        
      }
    }
    console.log(formData);
    if (formData.mediaFile) {
      let id = [];
      if (Array.isArray(formData.mediaFile)) {
        const img = formData.mediaFile.map((val, key) => {
          id.push(val.id.toString());
          return val.media_file;
        });
        delete formData.mediaFile;
        formData.media = id.toString();
      }
      // if (formData && formData.amenities) {
      //   formData.amenities.map((val, key) => {
      //     let id = [];
      //     if (Array.isArray(val.mediaFile)) {
      //       const img = val.mediaFile.map((val2, key) => {
      //         id.push(val2.id.toString());
      //         return val2.media_file;
      //       });
      //       delete formData.amenities.mediaFile;
      //       formData.media = id.toString();
      //     }
      //   });
      // }
    }
    console.log("bathla", formData);
    setUpdateFormDataValue(formData);
    console.log("aakash", formData);
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      setLoaderIndicator(true);
      fetchData(
        `${apis.projectListingUrl}/${props.match.params.id}`,
        updateFormData,
        null,
        errorHandler
      );
    }
  }, []);
  return (
    <div>
      <div className="form-header">
        <span className="back-btn" onClick={() => history.goBack()}>
          <i className="zmdi zmdi-arrow-left"></i>
        </span>
        <span className="form-header__title">Edit Project</span>
      </div>
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
          fields={fields}
          formData={updateFormDataValue}
          transformErrors={transformErrors}
          onChange={(args) => handleOnChange(args)}
          noHtml5Validate={true}
          onSubmit={({ formData }, e) => {
            e.preventDefault();
            if (formData && formData.mediaFile) {
              formData.media = formData.mediaFile.split(",").map(Number);
            }
            delete formData.mediaFile;
            if (formData && formData.amenities) {
              formData.amenities.map((val, key) => {
                formData.amenities[key].media = val.mediaFile
                  ? val.mediaFile.split(",").map(Number)
                  : [];
              });
              for (var i = 0; i < formData.amenities.length; i++) {
                if (formData.amenities[i] && formData.amenities[i].mediaFile) {
                  delete formData.amenities[i].mediaFile;
                  delete formData.amenities[i].id;
                }
              }
            }
            if (formData && formData.features) {
              formData.features.map((val, key) => {
                formData.features[key].media = parseInt(val.mediaFile);
              });

              for (var i = 0; i < formData.features.length; i++) {
                if (formData.features[i] && formData.features[i].mediaFile) {
                  delete formData.features[i].mediaFile;
                }
              }
            }
            setLoaderIndicator(true);
            updateData(
              `${apis.projectListingUrl}${props.match.params.id}/`,
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

export default EditProject;
