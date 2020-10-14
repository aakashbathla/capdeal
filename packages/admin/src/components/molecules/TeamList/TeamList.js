/* eslint-disable */
/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing";
import "./TeamList.scss";
import Loader from "../../atoms/Loader";

const TeamListing = () => {
  const [teamData, setTeamData] = useState([]);
  const [error, setError] = useState(null);
  const [loaderIndicator, setLoaderIndicator] = useState(null);
  let urlOptions = {
    pathname: apis.teamListingUrl,
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
          setLoaderIndicator(false);
          if (data) {
            setTeamData(data);
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
  const deleteTeam = (id) => {
    const additionalFetchOptions = (id) => ({
      method: "DELETE",
    });
    const updateUrlOptions = {
      ...urlOptions,
      pathname: apis.teamListing + id,
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
      {teamData && teamData.results && (
        <Listing
          data={teamData}
          listingName="Teams List"
          listingDescription="Manage Teams"
          deleteItem={deleteTeam}
          pageCount={teamData.count}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          customClassName="team-list"
          loadMore={fetchData}
          addUrl="/app/add-team"
          editUrl="/app/edit-team"
        ></Listing>
      )}
    </>
  );
};

export default TeamListing;
