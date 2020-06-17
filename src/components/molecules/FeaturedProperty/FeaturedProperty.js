import React from "react";
import "./FeaturedProperty.scss";
import CardVendor from "../../atoms/CardVendor/CardVendor";
const FeaturedProperty = () => {
  return (
    <div className="featureProperty">
      <div className="container">
        <h1>Lorem Ipsum is ready</h1>
        <div className="col-lg-12 d-flex flex-wrap">
          <div className="row">
            <div className="col-lg-4">
              <CardVendor />
            </div>
            <div className="col-lg-4">
              <CardVendor />
            </div>
            <div className="col-lg-4">
              <CardVendor />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <CardVendor />
            </div>
            <div className="col-lg-4">
              <CardVendor />
            </div>
            <div className="col-lg-4">
              <CardVendor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
