import React from "react";
import "./Advertise.scss";
import AdvertiseImage from "assets/town.png";
const Advertise = () => {
  return (
    <div className="advertise">
      <div className="container">
        <div className="advertise_container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              <h1 className="mt-3">Bhubaneswar</h1>
              <p>
                We are always keeping an eye on the finest projects In the city for you. And, The numbers speak, Of Course.
              </p>
            </div>
            <div className="col-lg-2 number col-md-12 col-12 text-center align-self-center">
              <h2>456</h2>
              <span className="header">Projects</span>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <img src={AdvertiseImage} className="advertise_image" alt="advertise" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
