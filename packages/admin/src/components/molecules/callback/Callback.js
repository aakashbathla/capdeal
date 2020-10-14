/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
import Loader from "../../atoms/Loader";
import "./Callback.scss";

const CallbackListing = () => {
  const [customerData, setCallbackData] = useState([]);
  const [error, setError] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  let urlOptions = {
    pathname: apis.contactus,
    urlEncoded: true,
  };
  const fetchData = (params) => {
    urlOptions = {
      ...urlOptions,
      query: params || undefined,
    };
    setLoaderIndicator(true);
    try {
      ServiceUtils.fetch(buildUrl(urlOptions, params), "http://")
        .then((data) => {
          if (data) {
            setLoaderIndicator(false);
            setCallbackData(data);
          } else {
            setLoaderIndicator(false);
            console.log(error);
          }
        })
        .catch((err) => {
          setLoaderIndicator(false);
          setError(errorGenerator(err));
        });
    } catch (err) {
      setLoaderIndicator(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteCallback = (id) => {
    const additionalFetchOptions = (id) => ({
      method: "DELETE",
    });
    const updateUrlOptions = {
      ...urlOptions,
      pathname: urlOptions.pathname + id,
    };
    setLoaderIndicator(true);
    try {
      ServiceUtils.fetch(
        buildUrl(updateUrlOptions),
        additionalFetchOptions(id),
        "http://"
      )
        .then(() => {
          setLoaderIndicator(false);
          fetchData();
        })
        .catch((err) => {
          setLoaderIndicator(false);
          setError(errorGenerator(err));
        });
    } catch (err) {
      setLoaderIndicator(false);
      console.log(err);
    }
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
      {customerData && customerData.results && (
        <Listing
          data={customerData}
          listingName="Callbacks List"
          listingDescription="Manage Callbacks"
          deleteItem={deleteCallback}
          pageCount={customerData.count}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          customClassName="customer-list"
          loadMore={fetchData}
          hideActions={true}
        ></Listing>
      )}
    </>
  );
};

export default CallbackListing;
