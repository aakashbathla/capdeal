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
      throw err;
    }

    return responseData;
  }
}

export default new ServiceUtils();
