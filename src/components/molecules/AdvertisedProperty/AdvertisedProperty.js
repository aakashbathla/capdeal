import React from "react";
import "./AdvertisedProperty.scss";
import AdvetisedImage from "../../../assets/advertised_property.png";
const AdvertisedProperty = () => {
  return (
    <div className="advertised_property">
      <div className="container">
        <h1 className="advertised_property_header">Lorem Ipsum is simply</h1>
        <div className="row">
          <div className="col-lg-12 d-flex">
            <div className="col-lg-3">
              <div>
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <h2>Property Name</h2>
                <p>Area Name</p>
                <div>
                  <span>2BHK-3BHK</span> | <span>1090-1460SF</span>
                </div>
                <h6>41.2 Lac to 55.48 Lac</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <h2>Property Name</h2>
                <p>Area Name</p>
                <div>
                  <span>2BHK-3BHK</span> | <span>1090-1460SF</span>
                </div>
                <h6>41.2 Lac to 55.48 Lac</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <h2>Property Name</h2>
                <p>Area Name</p>
                <div>
                  <span>2BHK-3BHK</span> | <span>1090-1460SF</span>
                </div>
                <h6>41.2 Lac to 55.48 Lac</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <h2>Property Name</h2>
                <p>Area Name</p>
                <div>
                  <span>2BHK-3BHK</span> | <span>1090-1460SF</span>
                </div>
                <h6>41.2 Lac to 55.48 Lac</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProperty;
