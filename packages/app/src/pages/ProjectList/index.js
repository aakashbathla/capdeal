import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ProjectItem from "components/molecules/ProjectCard";
import SearchFilter from "components/molecules/SearchFilter";
import ContactRealEstateForm from "components/molecules/ContactRealEstateForm";
import Footer from "components/molecules/Footer/Footer";
import "./projectList.scss";

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div className="project-list__wrap">
        <SearchFilter />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <ProjectItem propertyTableId="table1" />
              <ProjectItem propertyTableId="table2" />
              <ProjectItem propertyTableId="table3" />
              <ProjectItem propertyTableId="table4" />
              <ProjectItem propertyTableId="table5" />
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
