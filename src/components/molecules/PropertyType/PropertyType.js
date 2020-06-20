import React from "react";
import "./PropertyType.scss";
import ExclusiveProperty from "../../../assets/exclusive_property.png";
import PremiumProperty from "../../../assets/premium_property.png";
const PropertyType = () => {
  return (
    <div className="property_type">
      <div className="container">
        <div className="d-none d-md-block">
          <div className="row property_type_container">
            <div className="col-lg-5 col-md-5">
              <h1 className="p0 mt0 mb2">Exclusive</h1>
              <div className="property_type_container_link pb2">Know More</div>
              <img src={ExclusiveProperty} alt="Exclusive Property" />
            </div>
            <div className="col-lg-5 col-md-5">
              <img src={PremiumProperty} alt="Premium Property" />
              <h1 className="my2 p0">Premium</h1>
              <div className="property_type_container_link pb0">Know More</div>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <ul className="nav nav-tabs">
            <li className="active width-50">
              <a data-toggle="tab" className="tab-link" href="#exclusive">
                Exclusive
              </a>
            </li>
            <li className="width-50">
              <a data-toggle="tab" className="tab-link" href="#premium">
                Premium
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="exclusive" className="tab-pane fade in active show">
              <img src={ExclusiveProperty} alt="Exclusive Property" />
              <div className="tab_content_link pb0">Know More</div>
            </div>
            <div id="premium" className="tab-pane fade">
              <img src={PremiumProperty} alt="Premium Property" />
              <div className="tab_content_link pb0">Know More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
