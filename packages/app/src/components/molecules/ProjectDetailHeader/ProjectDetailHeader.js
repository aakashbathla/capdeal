import React from "react";
import CallBackModal from "../CallBackModal";
import "./ProjectDetailHeader.scss";

const ProjectDetailHeader = ({ data }) => {
  return (
    <div className="card header-wrap mb-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-5">
          <h1 className="mb-0 mt-0">{data.name}</h1>
          <h5>
            <i className="zmdi zmdi-pin"></i> {`${data.city}, ${data.state}`}
          </h5>
        </div>
        <div className="col-6 col-md-6 col-lg-3 header-wrap__space">
          <div className="card header-wrap__price">
            <h3 className="mb-0">
              &#8377;{`${data.min_price} TO `}&#8377;
              {`${data.max_price}`}
            </h3>
            <h5 className="mb-0">&#8377;6000/Sq.Ft Onwards</h5>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-2 align-self-center">
          <h5 className="status mb-0">STATUS</h5>
          <h4 className="mb-0">{data.status}</h4>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <button
            className="btn btn-green btn-lg btn-block"
            data-toggle="modal"
            data-target="#callBackModal"
          >
            Call Back
          </button>
          <button
            className="btn btn-yellow btn-lg btn-block"
            data-toggle="modal"
            data-target="#callBackModal"
          >
            Contact Expert
          </button>
        </div>
      </div>
      <CallBackModal />
    </div>
  );
};

export default ProjectDetailHeader;
