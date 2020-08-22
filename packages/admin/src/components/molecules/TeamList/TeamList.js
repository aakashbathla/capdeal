/* eslint-disable */
/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing";
import "./TeamList.scss";

const TeamListing = () => {
  const [teamData, setTeamData] = useState([]);
  let urlOptions = {
    pathname: apis.teamListingUrl,
    urlEncoded: true,
  };
  const fetchData = (params) => {
    urlOptions = {
      ...urlOptions,
      query: params || undefined,
    };

    try {
      ServiceUtils.fetch(buildUrl(urlOptions, params), "http://").then(
        (data) => {
          if (data) {
            setTeamData(data);
            console.log(data);
          } else {
            console.log(error);
          }
        }
      );
    } catch (err) {
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