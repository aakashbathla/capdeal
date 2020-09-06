import ServiceUtils from "./ServiceUtils";
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
