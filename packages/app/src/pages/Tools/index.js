import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import Footer from "components/molecules/Footer/Footer";
import EmiCalculator from "components/molecules/EmiCalculator";
import bgImage from "assets/emi-bg.png";
import "./Tools.scss";

const UserJourney = (props) => {
  return (
    <div className="tools">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div style={{ backgroundImage: `url(` + bgImage + `)` }}>
        <div className="container tools__wrap">
          <EmiCalculator />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserJourney;
