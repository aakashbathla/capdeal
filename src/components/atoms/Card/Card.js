import React from "react";
import cardImage from "../../../assets/resale_property.png";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card mb-4">
      <div className="card_container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-4">
            <img className="card_container_image" src={cardImage} alt="card" />
          </div>
          <div className="col-lg-8 col-md-8 col-8">
            <h4>167 sq. Yd. Plot in Achutapuram</h4>
            <div className="location">Achutapuram, Vizag</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
