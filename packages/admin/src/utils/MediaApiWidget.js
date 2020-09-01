import React, { useState } from "react";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
import { buildUrl } from "./Utils";
const MediaApiWidget = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
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
        props.onChange(data.id);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <input
      name="file"
      type="file"
      onChange={handleChange}
      accept={props.options.accept}
    />
  );
};

export default MediaApiWidget;
