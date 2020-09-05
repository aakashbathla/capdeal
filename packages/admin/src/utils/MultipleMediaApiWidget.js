import React from "react";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
import { buildUrl } from "./Utils";
const MultipleMediaApiWidget = (props) => {
  let imageIds = [];
  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.files);
    let length = e.target.files.length;
    for (var i = 0; i < e.target.files.length; i++) {
      console.log(e.target.files)
      formData.append("media_file", e.target.files[0], e.target.files[0].name);
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
  };
  return (
    <input
      name="file"
      multiple="multiple"
      type="file"
      onChange={handleChange}
      accept="image/gif, image/jpeg, image/png"
    />
  );
};

export default MultipleMediaApiWidget;
