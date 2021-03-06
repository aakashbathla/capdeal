/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing";
import "./Seo.scss";
import Loader from "../../atoms/Loader";

const SeoListing = () => {
  const [seoData, setSeoData] = useState([]);
  const [error, setError] = useState(null);
  let urlOptions = {
    pathname: apis.seoListingUrl,
    urlEncoded: true,
  };
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  const fetchData = (params) => {
    urlOptions = {
      ...urlOptions,
      query: params || undefined,
    };
    setLoaderIndicator(true);
    try {
      ServiceUtils.fetch(buildUrl(urlOptions, params), "http://")
        .then((data) => {
          setLoaderIndicator(false);
          if (data) {
            setSeoData(data);
          } else {
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
  const deleteSeo = (id) => {
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
