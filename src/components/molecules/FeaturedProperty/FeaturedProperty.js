import React from "react";
import "./FeaturedProperty.scss";

import CardVendor from "../../atoms/CardVendor/CardVendor";
const FeaturedProperty = () => {
  return (
    <div className="featureProperty">
      <div className="container">
        <h1 className="m0">Lorem Ipsum is ready</h1>
        <div className="col-lg-12 p0">
          <div className="row pb-md-4  pb-0">
            <div className="col-lg-4 col-md-4 col-12 pb-2 pb-md-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-2 pb-md-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-2 pb-md-0">
              <CardVendor />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 pb-2 pb-md-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-2 pb-md-0 d-none d-md-block">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-2 pb-md-0 d-none d-md-block">
              <CardVendor />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center pt5 link">View All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
