import React from "react";
import "./ProjectDetailRating.scss";

const ProjectDetailRating = () => {
  return (
    <div className="row mb-4">
      <div className="col-lg-2 col-md-12 col-12 pt-4">
        <i className="zmdi zmdi-favorite mr-3"></i>|
        <i className="zmdi zmdi-facebook ml-3"></i>
        <i className="zmdi zmdi-linkedin ml-3 mr-3">
        </i><i className="zmdi zmdi-twitter"></i>
      </div>
      <div className="col-lg-2 col-md-12 col-12 pt-4 px-0">
        <span className="rating">RATING</span>
        <span className="rating-value">4.5  <i className="zmdi zmdi-star"></i></span>
      </div>
      <div className="col-lg-3 col-md-12 col-12 pt-4 px-0">
        <div className="d-driver">
          <span>DECISION DRIVERS</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{width: '50%'}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-12 col-12 p-0">
        &nbsp;
      </div>
      <div className="col-lg-3 col-md-12 col-12 px-0 bg-purple">
        &nbsp;
      </div>
    </div>
  );
};

export default ProjectDetailRating;
