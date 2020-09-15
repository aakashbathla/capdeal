import React, { useEffect, useState } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ProjectItem from "components/molecules/ProjectCard";
import SearchFilter from "components/molecules/SearchFilter";
import ContactRealEstateForm from "components/molecules/ContactRealEstateForm";
import Footer from "components/molecules/Footer/Footer";
import "./projectList.scss";
import { fetchData } from "../../utils/Utils";
import apis from "constants/apis/services";
const ProjectList = () => {
  const [dataList, setDataList] = useState([]);
  const updateFormData = (data) => {
    setDataList(data);
  };
  useEffect(() => {
    fetchData(apis.projectListingUrl, updateFormData);
  }, []);
  return (
    <div className="project-list">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div className="project-list__wrap">
        <SearchFilter />
        <div className="container">
          <div className="row">
            <div className="col-sm-2 mb-4">
              <div className="dropdown">
              <a className="btn btn-outline-dark dropdown-toggle btn-lg btn-block" href="true" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/project-list">Latest</a>
                <a className="dropdown-item" href="/project-list">Another action</a>
                <a className="dropdown-item" href="/project-list">Something else here</a>
              </div>
            </div>
            </div>
            <div className="col-sm-6 align-self-center">
              <h4 className="showing-text text-right mb-3">
                Showing 1-5 Projects out of 230 
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              {dataList &&
                dataList.results &&
                dataList.results.map((val, key) => {
                  return (
                    <ProjectItem propertyTableId={`table${key}`} value={val} />
                  );
                })}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <ContactRealEstateForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectList;
