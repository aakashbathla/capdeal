import React from "react";
import "./Features.scss";
import FeaturesImage from "assets/features.png";
const Features = () => {
  return (
    <div className="features white-background">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3">Features</h1>
          </div>
          <div className="col-12">
            <img src={FeaturesImage} alt="feature" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
