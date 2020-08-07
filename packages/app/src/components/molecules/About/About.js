import React from "react";
import AboutImage from "assets/aboutus.png";
import AboutBgImage from "assets/about-bg.png";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="about_image col-lg-1 d-none d-lg-block">
            <div className="about_image_wrap">
              <img src={AboutImage} alt="about" />
            </div>
          </div>
          <div className="col-lg-11 col-md-12 col-sm-12 pl-0 pr-0 pr-md-4">
            <div className="about_content" style={{backgroundImage: `url(`+AboutBgImage+`)`}}>
              <div className="row m-0">
                <div className="col-lg-9 col-md-12 col-sm-12 offset-lg-3 offset-md-0">
                  <h1 className="mb0">How We Works</h1>
                  <p className="about_content_description">
                    Sed eirmod stet duo dolore et tempor sed tempor ipsum. Dolor
                    eirmod voluptua et elitr, at ipsum no sanctus ame
                  </p>
                </div>
              </div>
              <div className="d-block d-lg-none">
                <img
                  className="about_mobile_image"
                  src={AboutImage}
                  alt="about"
                />
              </div>
              <div className="row m-0">
                <div className="col-lg-9 col-md-12 col-sm-12 offset-lg-3 offset-md-0">
                  <div className="row flex-justify-center pb-4 about_content_details mt-lg-3 mt-md-3">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="about_content_border"></div>
                      <h6>Lorem Ipsum is ready</h6>
                      <span className="about_content_border_details">
                        Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="about_content_border"></div>
                      <h6>Lorem Ipsum is ready</h6>
                      <span className="about_content_border_details">
                        Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="about_content_border"></div>
                      <h6>Lorem Ipsum is ready</h6>
                      <span className="about_content_border_details">
                        Amet elitr sea diam et ipsum. Eirmod sit aliquyam dolor diam.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;