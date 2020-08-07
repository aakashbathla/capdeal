import React from "react";
import "./CardVendor.scss";
import cardVendor1 from "../../../assets/card-vendor-1.png";
import BuildingIcon from "assets/buildings1.png";
import ExpIcon from "assets/exp.png";

const CardVendor = () => {
  return (
    <div className="card-vendor row mr0">
      <div className="col-2 col-md-3 col-lg-3 px-3">
        <img src={cardVendor1} className="card-vendor_img" alt="card-vendor" />
      </div>
      <div className="col-9 col-md-9 col-lg-9 sm-relative pl-4">
        <div className="">
          <h3>ShriRam Properties</h3>
          <span className="pr-4">
            <img src={BuildingIcon} className="mr-2" alt="icon" />
            <span className="align-middle">64 Projects</span>
          </span>
          <span>
            <img src={ExpIcon} className="mr-2" alt="icon" />
            12 yrs Experience
          </span>
          <div className="d-block d-md-none sm-absolute mobile-link">
            Know More
          </div>
        </div>
        <div className="text-right py-2 mt-3 orange link d-none d-md-block">
          Know More
        </div>
      </div>
    </div>
  );
};

export default CardVendor;
