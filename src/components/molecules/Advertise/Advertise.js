import React from "react";
import "./Advertise.scss";
import AdvertiseImage from "assets/town.png";
const Advertise = () => {
  return (
    <div className="advertise">
      <div className="container">
        <div className="advertise_container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12">
              <h1 className="mt-3">Bhubhaneshwar</h1>
              <p>
                At et est sea et labore aliquyam sadipscing duo. Labore kasd
                accusam duo et et vero est et, ut sit.
              </p>
            </div>
            <div className="col-lg-2 number col-md-2 col-12">
              <span className="header">Projects</span>
              <h2>456</h2>
              <span className="number_link">View more</span>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <img src={AdvertiseImage} className="advertise_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
