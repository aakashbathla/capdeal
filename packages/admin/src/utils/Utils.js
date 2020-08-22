import { LocalStorageUtil } from "./localstorage";
export const phoneRegExp = "^(+91[-s]?)?[0]?(91)?[789]d{9}$";
export const passwordRegExp = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
export const buildUrl = (options) => {
  if (typeof options === "object") {
    const { pathname, query, urlEncoded } = options;
    let url = pathname;
    if (typeof query === "object") {
      url += `?${createUrlSearchParams(query, urlEncoded)}`;
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
const localStorage = new LocalStorageUtil();
const setCookieMethod = (userProfile) => {
  localStorage.saveItem("userProfile", JSON.stringify(userProfile));
};
