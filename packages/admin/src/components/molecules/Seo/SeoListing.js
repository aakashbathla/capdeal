/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing";
import "./Seo.scss";

const SeoListing = () => {
  const [seoData, setSeoData] = useState([]);
  let urlOptions = {
    pathname: apis.seoListingUrl,
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
            setSeoData(data);
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
  const deleteSeo = (id) => {
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
      {seoData && seoData.results && (
        <Listing
          data={seoData}
          listingName="SEO List"
          listingDescription="Manage SEO"
          deleteItem={deleteSeo}
          pageCount={seoData.count}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          customClassName="seo-list"
          loadMore={fetchData}
          addUrl="/app/add-seo"
          editUrl="/app/edit-seo"
        ></Listing>
      )}
    </>
  );
};

export default SeoListing;
