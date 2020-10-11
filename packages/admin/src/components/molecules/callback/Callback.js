/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
import "./Callback.scss";

const CallbackListing = () => {
  const [customerData, setCallbackData] = useState([]);
  const [error, setError] = useState(null);
  let urlOptions = {
    pathname: apis.contactus,
    urlEncoded: true,
  };
  const fetchData = (params) => {
    urlOptions = {
      ...urlOptions,
      query: params || undefined,
    };

    try {
      ServiceUtils.fetch(buildUrl(urlOptions, params), "http://")
        .then((data) => {
          if (data) {
            setCallbackData(data);
          } else {
            console.log(error);
          }
        })
        .catch((err) => {
          setError(errorGenerator(err));
        });
    } catch (err) {
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
    try {
      ServiceUtils.fetch(
        buildUrl(updateUrlOptions),
        additionalFetchOptions(id),
        "http://"
      )
        .then(() => {
          fetchData();
        })
        .catch((err) => {
          setError(errorGenerator(err));
        });
    } catch (err) {
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
