import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import Footer from "components/molecules/Footer/Footer";
import SideNav from "components/molecules/SideNav";
import "./UserJourney.scss";

const UserJourney = (props) => {
  return (
    <div className="user">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div className="container user__wrap">
        <div className="position-relative">
          <SideNav />
          <div className="user__content">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserJourney;
