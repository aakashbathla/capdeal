import React from "react";
import "./CardVendor.scss";
import cardVendor1 from "../../../assets/card-vendor-1.png";
import BuildingIcon from "../../../styles/icons/buildings.svg";
// import BuildingIcon from "../../../styles/icons/ellipse.svg";
const CardVendor = () => {
  return (
    <div className="card-vendor row mr0">
      <div className="col-3 col-md-5 col-lg-3 px-2">
        <img src={cardVendor1} alt="card-vendor" />
      </div>
      <div className="col-9 col-md-7 col-lg-9 sm-relative pl-2">
        <div className="">
          <h3>ShriRam Properties</h3>
          <span className="pr-4">
            <BuildingIcon className="mr-2" />
            64 Projects
          </span>
          <span>
            <BuildingIcon className="mr-2" />
            12 yrs Experience
          </span>
          <div className="d-block d-md-none sm-absolute mobile-link">
            Know More
          </div>
        </div>
        <div className="text-right py-2 orange link d-none d-md-block">
          Know More
        </div>
      </div>
    </div>
  );
};

export default CardVendor;
