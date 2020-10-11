import React from "react";
// import Icon1 from "assets/sofa.png";
// import Icon2 from "assets/spread.png";
// import Icon3 from "assets/diamond.png";
// import Icon4 from "assets/hospital.png";
// import Icon5 from "assets/school.png";
// import Icon6 from "assets/road.png";
// import Icon7 from "assets/total.png";
import "./ProjectDetailFeatures.scss";

const ProjectDetailFeatures = ({ data }) => {
  return (
    <div className="row info-bar">
      {data.features &&
        data.features.length > 0 &&
        data.features.map((val, key) => {
          return (
            <div key={key} className="col">
              <div className="info-bar__item">
                <img src={data.features[key].media.media_file} alt="icon" />
                <p>{data.features[key].description}</p>
              </div>
            </div>
          );
        })}

      {/* <div className="col">
        <div className="info-bar__item">
          <img src={Icon2} alt="icon" />
          <p>Spread across 8.5 acres</p>
        </div>
      </div>
      <div className="col">
        <div className="info-bar__item">
          <img src={Icon3} alt="icon" />
          <p>The project offers spacious Apartments with luxurious features</p>
        </div>
      </div>
      <div className="col">
        <div className="info-bar__item">
          <img src={Icon4} alt="icon" />
          <p>Close to Sai Neha hospital</p>
        </div>
      </div>
      <div className="col">
        <div className="info-bar__item">
          <img src={Icon5} alt="icon" />
          <p>Close to Schools and Shopping malls</p>
        </div>
      </div>
      <div className="col">
        <div className="info-bar__item">
          <img src={Icon6} alt="icon" />
          <p>Adjacent to Gachibowli Road</p>
        </div>
      </div>
      <div className="col">
        <div className="info-bar__item">
          <img src={Icon7} alt="icon" />
          <p>Total - 430 Units</p>
        </div>
      </div>
     */}
    </div>
  );
};

export default ProjectDetailFeatures;
