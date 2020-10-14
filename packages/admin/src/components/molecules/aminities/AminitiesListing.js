/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
import Loader from "../../atoms/Loader";
import "./Aminities.scss";

const AminitiesListing = () => {
  const [loaderIndicator, setLoaderIndicator] = useState(false);
  const [aminitiesData, setAminitiesData] = useState([]);
  const [error, setError] = useState(null);
  let urlOptions = {
    pathname: apis.aminitiesListingUrl,
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
            setAminitiesData(data);
            setLoaderIndicator(false);
          } else {
            console.log(error);
            setLoaderIndicator(false);
          }
        })
        .catch((err) => {
          setError(errorGenerator(err));
          setLoaderIndicator(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteAminities = (id) => {
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
          fetchData();
          setLoaderIndicator(false);
        })
        .catch((err) => {
          setError(errorGenerator(err));
          setLoaderIndicator(false);
        });
    } catch (err) {
      console.log(err);
      setLoaderIndicator(false);
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
      {aminitiesData && aminitiesData.results && (
        <Listing
          data={aminitiesData}
          listingName="Aminitiess List"
          listingDescription="Manage Aminitiess"
          deleteItem={deleteAminities}
          pageCount={aminitiesData.count}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          customClassName="aminities-list"
          loadMore={fetchData}
          addUrl="/app/add-aminities"
          editUrl="/app/edit-aminities"
        ></Listing>
      )}
    </>
  );
};

export default AminitiesListing;
