import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ProjectDetailHeader from "components/molecules/ProjectDetailHeader";
import ProjectDetailSlider from "components/molecules/ProjectDetailSlider";
import ProjectDetailRating from "components/molecules/ProjectDetailRating";
import ProjectDetailFeatures from "components/molecules/ProjectDetailFeatures";
import ProjectDetailTab from "components/molecules/ProjectDetailTab";
import Footer from "components/molecules/Footer/Footer";
import "./projectDetail.scss";

const ProjectList = () => {
  return (
    <div className="project-detail">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div className="project-detail__wrap">
        <div className="container">
          <ProjectDetailHeader />
          <ProjectDetailSlider />
          <ProjectDetailRating />
          <ProjectDetailFeatures />
        </div>
      </div>
      <ProjectDetailTab />
      <Footer />
    </div>
  );
};

export default ProjectList;
