import React from "react";
import AboutImage from "../../../assets/aboutus.png";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="about_image col-lg-4">
            <img src={AboutImage} alt="about" />
          </div>
          <div className="about_content col-lg-8">
            <h1>How We Works</h1>
            <p className="about_content_description">
              Sed eirmod stet duo dolore et tempor sed tempor ipsum. Dolor
              eirmod voluptua et elitr, at ipsum no sanctus amet, dolores diam
              accusam dolor sadipscing et tempor et ut magna. Est clita stet
              diam et. Rebum et kasd sadipscing vero, at diam dolore voluptua
              elitr, diam sit tempor dolores eirmod.
            </p>
            <div className="row about_content_deatils">
              <div className="col-lg-4">
                <div className="about_content_border"></div>
                <h6>Lorem Ipsum is ready</h6>
                <span>
                  Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                  Elitr invidunt aliquyam accusam magna elitr rebum. Stet
                  voluptua.
                </span>
              </div>
              <div className="col-lg-4">
                <div className="about_content_border"></div>
                <h6>Lorem Ipsum is ready</h6>
                <span>
                  Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                  Elitr invidunt aliquyam accusam magna elitr rebum. Stet
                  voluptua.
                </span>
              </div>
              <div className="col-lg-4">
                <div className="about_content_border"></div>
                <h6>Lorem Ipsum is ready</h6>
                <span>
                  Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                  Elitr invidunt aliquyam accusam magna elitr rebum. Stet
                  voluptua.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
