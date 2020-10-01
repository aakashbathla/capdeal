import React from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import UserJourneyForm from "components/molecules/UserJourneyForm";
import Logo from "assets/logo.png";
import bgImage from "assets/user-bg-img.png";
import "./UserJourney.scss";
const UserJourney = () => {
  return (
    <div className="user-journey" style={{ backgroundImage: `url(` + bgImage + `)` }}>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area">
                <Anchor to="/home">
                  <img src={Logo} alt="enventer" />
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <UserJourneyForm />
      </div>
    </div>
  );
};

export default UserJourney;
