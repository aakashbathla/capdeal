/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing/";
import "./Aminities.scss";

const AminitiesListing = () => {
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

    try {
      ServiceUtils.fetch(buildUrl(urlOptions, params), "http://")
        .then((data) => {
          if (data) {
            setAminitiesData(data);
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
  const deleteAminities = (id) => {
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
