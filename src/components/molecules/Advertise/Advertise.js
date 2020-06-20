import React from "react";
import "./Advertise.scss";
import AdvertiseImage from "../../../styles/icons/undraw_quite_town_mg-1.svg";
const Advertise = () => {
  return (
    <div className="advertise">
      <div className="container">
        <div className="advertise_container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12">
              <h1>Bhubhaneshwar</h1>
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
              <AdvertiseImage className="advertise_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
