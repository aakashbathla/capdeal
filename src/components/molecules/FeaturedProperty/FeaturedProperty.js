import React from "react";
import "./FeaturedProperty.scss";
import FeaturedBgImage from "assets/about-bg.png";

import CardVendor from "../../atoms/CardVendor/CardVendor";
const FeaturedProperty = () => {
  return (
    <div className="featureProperty" style={{backgroundImage: `url(`+FeaturedBgImage+`)`}}>
      <div className="container">
        <h1 className="m0">Lorem Ipsum is ready</h1>
        <div className="col-lg-12 p0">
          <div className="row pb-lg-4 pb-0 justify-content-center">
            <div className="col-lg-4 col-md-6 col-10 pb-2 pb-lf-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-6 col-10 pb-2 pb-lg-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-6 col-10 pb-2 pb-lg-0 d-none d-lg-block">
              <CardVendor />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-10 pb-2 pb-lg-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-6 col-10 pb-2 pb-lg-0">
              <CardVendor />
            </div>
            <div className="col-lg-4 col-md-6 col-10 pb-2 pb-lg-0 d-none d-lg-block">
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
