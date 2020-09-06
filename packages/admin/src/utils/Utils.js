import { LocalStorageUtil } from "./localstorage";
import apis from "../constants/apis/services";
import ServiceUtils from "./ServiceUtils";
const request = require("request");
export const phoneRegExp = "^(+91[-s]?)?[0]?(91)?[789]d{9}$";
export const passwordRegExp = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
export const buildUrl = (options) => {
  if (typeof options === "object") {
    const { pathname, query, urlEncoded } = options;
    let url = pathname;
    if (url === apis.userListingUrl || url === apis.teamListingUrl) {
      if (typeof query === "object") {
        url += `&${createUrlSearchParams(query, urlEncoded)}`;
      }
    } else {
      if (typeof query === "object") {
        url += `?${createUrlSearchParams(query, urlEncoded)}`;
      }
    }

    return url;
  }
  return options;
};

export const createUrlSearchParams = (query = {}, urlEncoded = false) => {
  const queryParams = [];
  const keys = Object.keys(query);
  for (let i = 0, l = keys.length; i < l; i += 1) {
    const qs = `${query[keys[i]]}`;
    const qsencoded = urlEncoded ? encodeURIComponent(qs) : qs;
    queryParams.push(`${keys[i]}=${qsencoded}`);
  }
  return queryParams.join("&");
};

export const afterUserSuccess = (userProfile) => {
  setCookieMethod(userProfile);
};

export const addData = (url, data, redirectFunction, params) => {
  let urlOptions = {
    pathname: url,
    urlEncoded: true,
  };
  const additionalFetchOptions = () => ({
    method: "POST",
    data: data,
  });
  urlOptions = {
    ...urlOptions,
    query: params || undefined,
  };
  console.log("post called");
  try {
    ServiceUtils.fetch(
      buildUrl(urlOptions, params),
      additionalFetchOptions(),
      "http://"
    ).then((data) => {
      redirectFunction();
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchData = (url, updateFormData, params) => {
  let urlOptions = {
    pathname: url,
    urlEncoded: true,
  };
  urlOptions = {
    ...urlOptions,
    query: params || undefined,
  };

  try {
    ServiceUtils.fetch(buildUrl(urlOptions, params), "http://").then((data) => {
      updateFormData(data);
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateData = (url, data, redirectFunction, params) => {
  let urlOptions = {
    pathname: url,
    urlEncoded: true,
  };
  const additionalFetchOptions = () => ({
    method: "PATCH",
    data: data,
  });
  urlOptions = {
    ...urlOptions,
    query: params || undefined,
  };

  try {
    ServiceUtils.fetch(
      buildUrl(urlOptions, params),
      additionalFetchOptions(),
      "http://"
    ).then((data) => {
      redirectFunction();
    });
  } catch (err) {
    console.log(err);
  }
};

const localStorage = new LocalStorageUtil();
const setCookieMethod = (userProfile) => {
  localStorage.saveItem("userProfile", JSON.stringify(userProfile));
};

export const dataURItoBlob = (dataURI) => {
  var binary = atob(dataURI.split(",")[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
};

export const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

export const urlToBase64 = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(
          "data:" +
            response.headers["content-type"] +
            ";base64," +
            new Buffer(body).toString("base64")
        );
      } else {
        reject(response);
      }
    });
  });
};
