/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
const DeveloperListing = () => {
  const [developerData, setDeveloperData] = useState([]);
  const urlOptions = {
    pathname: apis.developerListingUrl,
    urlEncoded: true,
  };
  const fetchData = () => {
    try {
      ServiceUtils.fetch(buildUrl(urlOptions), "http://").then((data) => {
        if (data) {
          setDeveloperData(data);
          console.log(data);
        } else {
          console.log(error);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteDeveloper = (id) => {
    const additionalFetchOptions = (id) => ({
      method: "DELETE",
    });
    const updateUrlOptions = {
      ...urlOptions,
      pathname: urlOptions.pathname + id,
    };
    console.log(updateUrlOptions);
    try {
      ServiceUtils.fetch(
        buildUrl(updateUrlOptions),
        additionalFetchOptions(id),
        "http://"
      ).then(() => {
        fetchData();
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {developerData && developerData.results && (
        <Listing
          data={developerData}
          listingName="Developers List"
          listingDescription="Manage Developers"
          deleteItem={deleteDeveloper}
          pageCount={developerData.count}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
        ></Listing>
      )}
    </>
  );
};

export default DeveloperListing;
