import React from "react";
import "./CardVendor.scss";
import cardVendor1 from "../../../assets/card-vendor-1.png";
const CardVendor = () => {
  return (
    <div className="card-vendor d-flex">
      <img src={cardVendor1} alt="card-vendor" />
      <div>
        <h3>ShriRam Properties</h3>
        <span>64 Projects</span>
        <span>12 yrs Experience</span>
      </div>
    </div>
  );
};

export default CardVendor;
