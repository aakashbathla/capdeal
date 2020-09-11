/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
import "./CustomerList.scss";

const CustomerListing = () => {
  const [customerData, setCustomerData] = useState([]);
  let urlOptions = {
    pathname: apis.userListingUrl,
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
            setCustomerData(data);
            console.log(data);
          } else {
            console.log(error);
          }
        })
        .catch((err) => {
          console.log(errorGenerator(err));
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteCustomer = (id) => {
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
          console.log(errorGenerator(err));
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {customerData && customerData.results && (
        <Listing
          data={customerData}
          listingName="Customers List"
          listingDescription="Manage Customers"
          deleteItem={deleteCustomer}
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

export default CustomerListing;
