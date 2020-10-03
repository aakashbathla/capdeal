import React from "react";
import "./ExploreProperties.scss";
import CalculatorImage from "../../../assets/calculator.png";
const ExploreProperties = () => {
  return (
    <div className="container explore-properties" id="tools">
      <div className="explore-properties-header">
        Explore Properties using our tools
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-7 explore-properties-left-container">
          <ul className="p0">
            <li className="active">Calculators</li>
            <li>Heatmap</li>
            <li>Price Vs Size</li>
            <li>Recommendation Engine</li>
            <li>PMAY Calculator</li>
            <li>Tax Calculator</li>
            <li>Comparative Investor Page</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-5 explore-properties-image-container">
          <img
            className=" explore-properties-image"
            src={CalculatorImage}
            alt="Calculator"
          />
          <div className="calculator-title">
            <h3>Calculators</h3>
          </div>
          <div className="calculator-description">
            One of the exclusive Smart Tools Capdeal has developed for real estate.
            <a href="/" className="calculator-link mt-2">
              Know More -
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;
