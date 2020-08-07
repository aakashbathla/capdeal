import React from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import "./NoMatch.scss";
import logo from "assets/logo.png";
import bgImage from "assets/bg-img.jpg";

const NoMatch = (props) => {
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
      <div className="container-fluid content" style={{backgroundImage: `url(`+bgImage+`)`}}>
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-2 col-lg-2 text-center">
            <div>
              <h3>Error 404</h3>
              <span>Page not found</span>
              <Anchor to="/home" className="btn btn-lg deep-purple-background light d-block mt-4">
                Go Back to Home
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
