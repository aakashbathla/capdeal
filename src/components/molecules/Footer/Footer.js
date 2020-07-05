import React from "react";
import Logo from "assets/logo.png";
import TwitterIcon from "assets/twitter.png";
import FacebookIcon from "assets/facebook.png";
import LinkedinIcon from "assets/linkedin.png";
import InstagramIcon from "assets/instagram.png";
import FooterBgImage from "assets/footer-bg.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container" style={{backgroundImage: `url(`+FooterBgImage+`)`}}>
      <div className="container footer-container-content">
        <div className="row m-0">
          <div className="col-lg-6 col-sm-12 col-md-6 footer-left-container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-6">
                <div>
                  <h3 className="footer-container-content-items">
                    Quick Links
                  </h3>
                  <ul className="footer-container-content-subitems no-list-style p-0">
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-6">
                <div>
                  <h3 className="footer-container-content-items">
                    Quick Links
                  </h3>
                  <ul className="footer-container-content-subitems no-list-style p-0">
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-6">
                <div>
                  <h3 className="footer-container-content-items">
                    Quick Links
                  </h3>
                  <ul className="footer-container-content-subitems no-list-style p-0">
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-6">
                <div>
                  <h3 className="footer-container-content-items">
                    Quick Links
                  </h3>
                  <ul className="footer-container-content-subitems no-list-style p-0">
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 footer-right-container">
            <div className="row m-0">
              <div className="col-lg-6 p-0">
                <img
                  src={Logo}
                  alt="Logo"
                  className="footer-right-container-logo"
                />
              </div>
              <div className="col-lg-6 p-0">
                <h3 className="footer-right-container-social-links">
                  Social Links
                </h3>
                <div>
                  <ul className="social-link-list p0">
                    <li>
                      <img src={TwitterIcon} alt="icon" />
                    </li>
                    <li>
                      <img src={LinkedinIcon} alt="icon" />
                    </li>
                    <li>
                      <img src={FacebookIcon} alt="icon" />
                    </li>
                    <li>
                      <img src={InstagramIcon} alt="icon" />
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="footer-right-container-social-links pt6">
                Sign Up
              </h3>
              <p className="footer-right-container-content">
                Tempor duo at et ut amet amet ut amet, duo et ea vero amet ut
                voluptua lorem accusam eos, lorem eos sadipscing eos takimata
                labore diam diam labore,
              </p>
              <div className="col-lg-12 p-0 pb-4">
                <input
                  type="text"
                  className="input input-box-email no-border px-3"
                  placeholder="Enter email"
                />
                <button className="button-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr className="orange-background my-0"></hr>
        <div className="text-center white py-4">
          All copyrights reserved 2020
        </div>
      </div>
    </div>
  );
};

export default Footer;
