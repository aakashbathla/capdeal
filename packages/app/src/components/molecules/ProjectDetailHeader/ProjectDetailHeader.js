import React from "react";
import "./ProjectDetailHeader.scss";

const ProjectDetailHeader = () => {
  return (
    <div className="card header-wrap mb-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-5">
          <h1 className="mb-0 mt-0">Name of the Property</h1>
          <h5><i className="zmdi zmdi-pin"></i> Kondapur, Hyd</h5>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 p-0">
          <div className="card header-wrap__price">
            <h3 className="mb-0">&#8377;81.60 LAC TO &#8377;1.56 CR</h3>
            <h5 className="mb-0">&#8377;6000/Sq.Ft Onwards</h5>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 align-self-center">
          <h5 className="status mb-0">STATUS</h5>
          <h4 className="mb-0">New Launch</h4>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <button className="btn btn-green btn-lg btn-block">Call Back</button>
          <button className="btn btn-yellow btn-lg btn-block">Contact Expert</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailHeader;
