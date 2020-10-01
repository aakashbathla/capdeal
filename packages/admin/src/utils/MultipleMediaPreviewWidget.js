import React, { useState, useEffect } from "react";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
import {
  buildUrl,
  convertBase64ToBlob,
  imageType,
  errorGenerator,
} from "./Utils";
import MultiImageInput from "react-multiple-image-input";
const MultipleMediaPreviewWidget = (props) => {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (props && props.value) {
      let id = [];
      if (Array.isArray(props.value)) {
        const img = props.value.map((val, key) => {
          id.push(val.id.toString());
          return val.media_file;
        });
        props.onChange(
          props.value
            .map((val) => {
              return val.id;
            })
            .toString()
        );
        setTimeout(() => {}, 0);
        setImages(img);
      }
      if (
        props.value &&
        props.value.media_file &&
        typeof props.value.media_file === "string"
      ) {
        const img = [];
        img.push(props.value.media_file);
        setImages(img);
        props.onChange(props.value.id.toString());
      }
    }
  }, [props]);
  let imageIds = [];
  const uploadImages = () => {
    const length = Object.keys(images).length;
    if (length > 0) {
      for (var i = 0; i < length; i++) {
        let formData = new FormData();
        formData.append(
          "media_file",
          convertBase64ToBlob(images[i]),
          `image.${imageType(images[i])}`
        );
        formData.append("media_type", "Image");
        let urlOptions = {
          pathname: apis.mediaUrl,
          urlEncoded: true,
        };
        const additionalFetchOptions = () => ({
          method: "POST",
          data: formData,
        });
        urlOptions = {
          ...urlOptions,
        };
        try {
          ServiceUtils.fetch(
            buildUrl(urlOptions),
            additionalFetchOptions(),
            "http://"
          ).then((data) => {
            imageIds.push(data.id.toString());
            if (imageIds.length === length) {
              props.onChange(imageIds.toString());
            }
          });
        } catch (err) {
          setError(errorGenerator(err));
          console.log(err);
        }
      }
    }
  };
  return (
    <>
      {error && (
        <div className="error">
          {error.map((val, key) => (
            <div>{val}</div>
          ))}
        </div>
      )}
      <MultiImageInput
        images={images}
        setImages={setImages}
        cropConfig={{ crop, ruleOfThirds: true }}
        allowCrop={false}
        max={props.options.number || 3}
      />
      <button type="button" onClick={uploadImages}>
        Upload All Images
      </button>
    </>
  );
};
export default MultipleMediaPreviewWidget;
