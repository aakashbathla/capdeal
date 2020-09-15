import React, { useState, useEffect } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ProjectDetailHeader from "components/molecules/ProjectDetailHeader";
import ProjectDetailSlider from "components/molecules/ProjectDetailSlider";
import ProjectDetailRating from "components/molecules/ProjectDetailRating";
import ProjectDetailFeatures from "components/molecules/ProjectDetailFeatures";
import ProjectDetailTab from "components/molecules/ProjectDetailTab";
import Footer from "components/molecules/Footer/Footer";
import "./projectDetail.scss";
import { fetchData } from "../../utils/Utils";
import apis from "constants/apis/services";
const ProjectList = (props) => {
  const [dataList, setDataList] = useState();
  const updateFormData = (data) => {
    setDataList(data);
  };
  useEffect(() => {
    if (props && props.match && props.match.params && props.match.params.id) {
      fetchData(
        `${apis.projectListingUrl}/${props.match.params.id}`,
        updateFormData,
        null
      );
    }
  }, [props]);
  return (
    <div className="project-detail">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div className="project-detail__wrap">
        <div className="container">
          {dataList && (
            <>
              <ProjectDetailHeader data={dataList} />
              <ProjectDetailSlider />
              <ProjectDetailRating />
              <ProjectDetailFeatures data={dataList} />
            </>
          )}
        </div>
      </div>
      {dataList && <ProjectDetailTab data={dataList} />}

      <Footer />
    </div>
  );
};

export default ProjectList;
