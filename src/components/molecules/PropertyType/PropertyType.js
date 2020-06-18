import React from "react";
import "./PropertyType.scss";
import ExclusiveProperty from "../../../assets/exclusive_property.png";
import PremiumProperty from "../../../assets/premium_property.png";
const PropertyType = () => {
  return (
    <div className="property_type">
      <div className="container">
        <div className="row property_type_container">
          <div className="col-lg-5">
            <h1>Exclusive</h1>
            <span>Know More</span>
            <img src={ExclusiveProperty} alt="Exclusive Property" />
          </div>
          <div className="col-lg-5">
            <img src={PremiumProperty} alt="Premium Property" />
            <h1>Premium</h1>
            <span>Know More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
