import React from "react";
import "./Advertise.scss";
import AdvertiseImage from "../../../assets/advertise_image.png";
const Advertise = () => {
  return (
    <div className="advertise">
      <div className="container">
        <div className="advertise_container">
          <div className="row">
            <div className="col-lg-5">
              <h1>Bhubhaneshwar</h1>
              <p>
                At et est sea et labore aliquyam sadipscing duo. Labore kasd
                accusam duo et et vero est et, ut sit.
              </p>
            </div>
            <div className="col-lg-2">
              <h1>456</h1>
            </div>
            <div className="col-lg-5">
              <img
                className="advertise_image"
                src={AdvertiseImage}
                alt="advertise"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
