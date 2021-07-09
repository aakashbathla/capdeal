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

export const addData = (url, data, redirectFunction, params, errorHandler) => {
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
  try {
    ServiceUtils.fetch(
      buildUrl(urlOptions, params),
      additionalFetchOptions(),
      "http://"
    )
      .then((data) => {
        redirectFunction();
      })
      .catch((err) => {
        errorHandler(err);
      });
  } catch (err) {
    return err;
  }
};

export const fetchData = (url, updateFormData, params, errorHandler) => {
  let urlOptions = {
    pathname: url,
    urlEncoded: true,
  };
  urlOptions = {
    ...urlOptions,
    query: params || undefined,
  };

  try {
    ServiceUtils.fetch(buildUrl(urlOptions, params), "http://")
      .then((data) => {
        updateFormData(data);
      })
      .catch((err) => {
        errorHandler(err);
      });
  } catch (err) {
    console.log(err && err.response);
    return err;
  }
};

export const updateData = (
  url,
  data,
  redirectFunction,
  params,
  errorHandler
) => {
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
    )
      .then((data) => {
        redirectFunction();
      })
      .catch((err) => {
        errorHandler(err);
      });
  } catch (err) {
    console.log(err && err.response);
    return err;
  }
};

const localStorage = new LocalStorageUtil();
const setCookieMethod = (userProfile) => {
  localStorage.saveItem("userProfile", JSON.stringify(userProfile));
};
export const logout = () => {
  localStorage.removeItem("userProfile");
};
export const getLocalstorageData = () => {
  return localStorage.getItem("userProfile");
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
      if (!error && response.statusCode === 200) {
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

export const convertBase64ToBlob = (base64Image) => {
  // Split into two parts
  const parts = base64Image.split(";base64,");

  // Hold the content type
  let imageType =
    parts[0] && parts[1] ? parts[0].split(":")[1] : ext(base64Image);
  if (imageType === ".png") {
    imageType = "image/png";
  } else if (imageType === ".jpg" || imageType === ".jpeg") {
    imageType = "image/jpeg";
  }

  // Decode Base64 string
  const decodedData = parts && parts[1] ? window.atob(parts[1]) : base64Image;

  // Create UNIT8ARRAY of size same as row data length
  const uInt8Array = new Uint8Array(decodedData.length);

  // Insert all character code into uInt8Array
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }

  // Return BLOB image after conversion
  var blob =
    parts && parts[1]
      ? new Blob([uInt8Array], { type: imageType })
      : new Blob(
          fetch(base64Image).then(function(response) {
            return response.blob();
          }),
          { type: imageType }
        );
  return blob;
};

function ext(url) {
  return (url = url.substr(1 + url.lastIndexOf("/")).split("?")[0])
    .split("#")[0]
    .substr(url.lastIndexOf("."));
}

export const imageType = (base64Image) => {
  const parts = base64Image.split(";base64,");
  let imageType =
    parts[0] && parts[1]
      ? "." +
        base64Image.substring(
          "data:image/".length,
          base64Image.indexOf(";base64")
        )
      : ext(base64Image);
  return imageType;
};

export const errorGenerator = (err) => {
  if (err && err.response && err.response.data) {
    let error = [];
    for (const [key, value] of Object.entries(err.response.data)) {
      if (key === "error" || key === "non_field_errors") {
        error.push(`${value}`);
      } else {
        error.push(`${key}: ${value}`);
      }
    }
    return error;
  } else {
    return ["Some Error Occurred! Please reach out to admin!"];
  }
};

export const transformErrors = (errors) => {
  return errors.map((error) => {
    if (error.name === "required") {
      error.message = "This Field is required";
      // error.stack = `${error.params.missingProperty} field is required`;
    }
    if (error.name === "type") {
      // error.stack = `${error.property.substring(1)} ${error.message}`;
    }
    if (error.name === "pattern") {
      if (error.property === ".phone_number") {
        error.message = "should match pattern +919999999999";
        // error.stack = "Phone Number: should match pattern +919999999999";
      }
      if (error.property === ".email") {
        error.message = "please enter correct Email Id";
        // error.stack = "Email: please enter correct Email Id";
      }
      if (error.property === ".password") {
        error.message =
          "one digit, one lowercase and one uppercase alphabet and, minimum length 6";
        // error.stack =
        //   "Password: one digit, one lowercase and one uppercase alphabet and, minimum length 6";
      }
    }
    delete error.stack;
    return error;
  });
};
