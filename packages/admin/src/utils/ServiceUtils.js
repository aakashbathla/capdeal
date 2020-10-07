import axios from "axios";
import es6promise from "es6-promise";
import { LocalStorageUtil } from "./localstorage";

es6promise.polyfill();

class ServiceUtils {
  constructor() {
    this.basePath = process.env.API_BASE_PATH || "";
    this.fetch = this.fetch.bind(this);
  }

  async fetch(url, additionalFetchOptions) {
    let responseData;
    const localStorage = new LocalStorageUtil();
    const token = JSON.parse(localStorage.getItem("userProfile"));
    // Request options in axios format
    const reqOptions = {
      url: `${this.basePath}${url}`,
      withCredentials: false,
      ...additionalFetchOptions,
      headers: token
        ? {
            Authorization: `Token ${token.auth_token}`,
          }
        : "",
    };

    try {
      const response = await axios(reqOptions);
      responseData = response.data;
    } catch (err) {
      if (err && err.response && err.response.status === 401) {
        alert("you don't have permission");
        window.location.href = "/login";
      } else if (err && err.response && err.response.status === 500) {
        window.location.href = "/500";
      } else if (err && err.response && err.response.status === 404) {
        window.location.href = "/404";
      }
      throw err;
    }
    return await responseData;
  }
}

export default new ServiceUtils();
