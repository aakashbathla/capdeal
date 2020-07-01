import React from "react";
import cardImage from "../../../assets/resale_property.png";
import CoinIcon from "assets/money.svg";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card mb-4">
      <div className="card_container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-4">
            <img className="card_container_image" src={cardImage} alt="card" />
            <span className="title">Residential</span>
          </div>
          <div className="col-lg-8 col-md-8 col-8 pl-0">
            <h4>167 sq. Yd. Plot in Achutapuram</h4>
            <div className="location">Achutapuram, Vizag</div>
            <div className="row mt-3 mb-3 pb-2">
              <div className="col-lg-5 col-md-5 col-6 border-l pr-0">
                <span className="d-block subhead">Price</span>
                <CoinIcon height="18" width="18" className="mr-2" /><span className="amount">41.2 Lac</span>
              </div>
              <div className="col-lg-7 col-md-7 col-6">
                <span className="d-block subhead">Status</span>
                <button className="btn btn-success btn-sm">Available - Sale</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
