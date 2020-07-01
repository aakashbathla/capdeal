import React from "react";
import "./Hero.scss";
import heroImage from "../../../assets/home-page-banner.png";
const Hero = () => {
  return (
    <div className="hero-component">
      <div className="container">
        <div className="hero-component-content-container">
          <div className="hero-component-content">
            <h2>Lorem Ipsum is simply</h2>
            <p>
              Et et sed duo consetetur amet sit sit clita dolor. Erat invidunt
              nonumy erat.
            </p>
          </div>
        </div>
      </div>
      <img className="hero-banner-image" src={heroImage} alt="Hero Banner" />
    </div>
  );
};
export default Hero;
