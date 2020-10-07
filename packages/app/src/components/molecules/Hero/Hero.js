import React from "react";
import "./Hero.scss";
import heroImage from "../../../assets/home-banner-final.jpg";
const Hero = () => {
  return (
    <div className="hero-component">
      <div className="container">
        <div className="hero-component-content-container">
          <div className="hero-component-content">
            <h2>Real Estate is Really Easy</h2>
            <p>
              Because, We are 100% Committed to Deliver Value with Values.
            </p>
          </div>
        </div>
      </div>
      <img className="hero-banner-image" src={heroImage} alt="Hero Banner" />
    </div>
  );
};
export default Hero;
