import React from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import "./InternalServerError.scss";
import logo from "assets/logo.png";
import bgImage from "assets/bg-img.jpg";

const InternalServerError = (props) => {
  return (
    <div>
      <header>
        <div className="deep-purple-background">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-area logo-area">
                  <Anchor to="/#home">
                    <img src={logo} alt="enventer" />
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="container-fluid content_internalServerError"
        style={{ backgroundImage: `url(` + bgImage + `)` }}
      >
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-2 col-lg-2 text-center">
            <div>
              <h3>Error 500</h3>
              <span>Internal Server Error</span>
              <Anchor
                to="/"
                className="btn btn-lg deep-purple-background light d-block mt-4"
              >
                Go Back to Home
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalServerError;
