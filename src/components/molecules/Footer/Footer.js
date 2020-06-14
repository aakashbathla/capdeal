import React from "react";
import Logo from "../../../assets/logo.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container footer-container-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <h3>Quick Links</h3>
                  <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h3>Quick Links</h3>
                  <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <h3>Quick Links</h3>
                  <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h3>Quick Links</h3>
                  <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 footer-right-container">
            <div className="row">
              <div className="col-lg-6 p-0">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="col-lg-6">
                <h3>Social Links</h3>
                <div>
                  <span>
                    <i></i>
                  </span>
                  <span>
                    <i></i>
                  </span>
                  <span>
                    <i></i>
                  </span>
                  <span>
                    <i></i>
                  </span>
                </div>
              </div>
              <h3>Sign Up</h3>
              <p>
                Tempor duo at et ut amet amet ut amet, duo et ea vero amet ut
                voluptua lorem accusam eos, lorem eos sadipscing eos takimata
                labore diam diam labore, est dolor dolores labore dolor, no
                clita et gubergren justo et sadipscing est erat et. Takimata et
                sed dolores duo ut justo,.
              </p>
              <div className="col-lg-12 p-0">
                <input
                  type="text"
                  className="input input-box-email"
                  placeholder="Enter Email"
                />
                <button className="button-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
