import React from "react";
import cardImage from "../../../assets/resale_property.png";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card">
      <div className="card_container">
        <img className="card_container_image" src={cardImage} alt="card" />
        <div>
          <h4>
            <b>167 sq. Yd. Plot in Achutapuram</b>
          </h4>
          <div className="location">Achutapuram, Vizag</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
