import React from "react";
import AboutImage from "assets/aboutus.png";
import ResponsibilityIcon from "assets/responsibility.png";
import SmartIcon from "assets/smart-talent.png";
import SalesIcon from "assets/sales.png";
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
            <div
              className="about_content"
              style={{ backgroundImage: `url(` + AboutBgImage + `)` }}
            >
              <div className="row m-0">
                <div className="col-lg-9 col-md-12 col-sm-12 offset-lg-3 offset-md-0">
                  <h1 className="mb-5 pb-5">THE CAPDEAL EDGE</h1>
                  {/* <p className="about_content_description">
                    Sed eirmod stet duo dolore et tempor sed tempor ipsum. Dolor
                    eirmod voluptua et elitr, at ipsum no sanctus ame
                  </p> */}
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
                      <div className="about_content_border">
                        <img src={ResponsibilityIcon} height="80" alt="responsobe" />
                      </div>
                      <h6>Ethical and Responsible Real Estate Transactions</h6>
                      <span className="about_content_border_details"></span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="about_content_border">
                        <img src={SmartIcon} height="80" alt="responsobe" />
                      </div>
                      <h6>Smartest of Talent & Finest of Inventory</h6>
                      <span className="about_content_border_details"></span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                      <div className="about_content_border">
                        <img src={SalesIcon} height="80" alt="responsobe" />
                      </div>
                      <h6>5 Years, 2000 Inventories & 1500 Crores of Sales Worth</h6>
                      <span className="about_content_border_details"></span>
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
