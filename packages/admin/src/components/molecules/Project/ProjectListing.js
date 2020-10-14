/* eslint-disable */
import React, { useState, useEffect } from "react";
import ServiceUtils from "../../../utils/ServiceUtils";
import { buildUrl, errorGenerator } from "../../../utils/Utils";
import apis from "../../../constants/apis/services";
import Listing from "../../atoms/ProjectCard";
import "./Project.scss";
import Loader from "../../atoms/Loader";

const ProjectListing = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null);
  let urlOptions = {
    pathname: apis.projectListingUrl,
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
            setProjectData(data);
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
  const deleteProject = (id) => {
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
