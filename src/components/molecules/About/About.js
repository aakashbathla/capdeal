import React from "react";
import AboutImage from "../../../assets/aboutus.png";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="about_image col-lg-4 col-md-4 d-none d-md-block">
            <img src={AboutImage} alt="about" />
          </div>
          <div className="about_content col-lg-8 col-md-8 col-sm-12">
            <h1 className="mb0">How We Works</h1>
            <p className="about_content_description">
              Sed eirmod stet duo dolore et tempor sed tempor ipsum. Dolor
              eirmod voluptua et elitr, at ipsum no sanctus ame
            </p>
            <div className="d-block d-md-none">
              <img
                className="about_mobile_image"
                src={AboutImage}
                alt="about"
              />
            </div>
            <div className="row flex-justify-center pb-4 about_content_deatils">
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="about_content_border"></div>
                <h6>Lorem Ipsum is ready</h6>
                <span className="about_content_border_details">
                  Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                  Elitr invidunt aliquyam accusam magna elitr rebum. Stet
                  voluptua.
                </span>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="about_content_border"></div>
                <h6>Lorem Ipsum is ready</h6>
                <span className="about_content_border_details">
                  Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                  Elitr invidunt aliquyam accusam magna elitr rebum. Stet
                  voluptua.
                </span>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="about_content_border"></div>
                <h6>Lorem Ipsum is ready</h6>
                <span className="about_content_border_details">
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
