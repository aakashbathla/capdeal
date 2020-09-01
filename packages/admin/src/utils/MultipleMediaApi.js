import React, { useState } from "react";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
import { buildUrl } from "./Utils";
const MultipleMediaApiWidget = (files) => {
  let imageIds = [];
  const formData = new FormData();
  let length = files.length;
  for (var i = 0; i < files.length; i++) {
    formData.append("media_file", files[i], files[i].name);
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
          return imageIds;
        }
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

export default MultipleMediaApiWidget;
