import React, { useState } from "react";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
import { buildUrl, errorGenerator } from "./Utils";
import Loader from "../components/atoms/Loader";
const MediaApiWidget = (props) => {
  const [error, setError] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("media_file", e.target.files[0], e.target.files[0].name);
    formData.append(
      "media_type",
      (props && props.options && props.options.type) || "Image"
    );
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
    setLoaderIndicator(true);
    try {
      ServiceUtils.fetch(
        buildUrl(urlOptions),
        additionalFetchOptions(),
        "http://"
      )
        .then((data) => {
          setLoaderIndicator(false);
          props.onChange(data.id);
        })
        .catch((err) => {
          setLoaderIndicator(false);
          setError(errorGenerator(err));
        });
    } catch (err) {
      setLoaderIndicator(false);
      setError(errorGenerator(err));
    }
    setError(null);
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
      <Loader loaderIndicator={loaderIndicator} />
      <input
        name="file"
        type="file"
        onChange={handleChange}
        accept={props.options.accept}
      />
    </>
  );
};

export default MediaApiWidget;
