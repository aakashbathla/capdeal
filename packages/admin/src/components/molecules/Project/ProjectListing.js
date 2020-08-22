/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/Listing";
import "./Project.scss";

const ProjectListing = () => {
  const [projectData, setProjectData] = useState([]);
  let urlOptions = {
    pathname: apis.projectListingUrl,
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
            setProjectData(data);
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
  const deleteProject = (id) => {
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
      {projectData && projectData.results && (
        <Listing
          data={projectData}
          listingName="Projects List"
          listingDescription="Manage Projects"
          deleteItem={deleteProject}
          pageCount={projectData.count}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          customClassName="project-list"
          loadMore={fetchData}
          addUrl="/app/add-project"
          editUrl="/app/edit-project"
        ></Listing>
      )}
    </>
  );
};

export default ProjectListing;
