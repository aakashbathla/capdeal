/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
const CustomerListing = () => {
  const [developerData, setDeveloperData] = useState([]);
  useEffect(() => {
    const urlOptions = {
      pathname: apis.userListingUrl,
      urlEncoded: true,
    };
    try {
      ServiceUtils.fetch(buildUrl(urlOptions), "http://").then((data) => {
        if (data) {
          setDeveloperData(data);
        } else {
          console.log(error);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      {developerData && developerData.results && (
        <Listing
          data={developerData}
          listingName="Customer List"
          listingDescription="Manage Customers"
          
        ></Listing>
      )}
    </>
  );
};

export default CustomerListing;
