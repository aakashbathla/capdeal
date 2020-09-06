import React, { useState } from "react";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
import { buildUrl, dataURItoBlob } from "./Utils";
import MultiImageInput from "react-multiple-image-input";
const MultipleMediaPreviewWidget = (props) => {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [images, setImages] = useState([]);
  // useEffect(() => {
  //   if (props && props.value) {
  //     const img = props.value.map((val, key) => {
  //       return val.media_file;
  //     });
  //     setImages(img);
  //   }
  // }, []);
  let imageIds = [];
  const uploadImages = () => {
    const length = Object.keys(images).length;
    const formData = new FormData();
    if (length > 0) {
      for (var i = 0; i < length; i++) {
        formData.append("media_file", dataURItoBlob(images[i]), "image");
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
          console.log(err);
        }
      }
    }
  };
  return (
    <>
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
