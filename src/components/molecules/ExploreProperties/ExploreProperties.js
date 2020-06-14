import React from "react";
import "./ExploreProperties.scss";
import CalculatorImage from "../../../assets/calculator.png";
const ExploreProperties = () => {
  return (
    <div className="container explore-properties pt-5 pb-5">
      <div className="explore-properties-header">
        Explore Properties using our tools
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div>
            <b>- Calculators</b>
          </div>
          <div>- Heatmap</div>
          <div>- Price Vs Size</div>
          <div>- Recommen Dation Engine</div>
          <div>- PMAY Calculator</div>
          <div>- Tax Calculator</div>
          <div>- Comparativ Investor Page</div>
        </div>
        <div className="col-lg-6 explore-properties-image-container">
          <img
            className=" explore-properties-image"
            src={CalculatorImage}
            alt="Calculator"
          />
          <div className="calculator-title">
            <h3>Calculators</h3>
          </div>
          <div className="calculator-description">
            Lorem erat amet kasd accusam elitr clita. Et sit diam ea sed ipsum
            dolor. Consetetur gubergren sit sanctus duo invidunt amet elitr amet
            stet, magna
            <a href="/" className="calculator-link">
              Know More -
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;
