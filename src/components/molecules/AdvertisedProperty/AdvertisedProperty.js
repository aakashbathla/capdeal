import React from "react";
import "./AdvertisedProperty.scss";
import AdvetisedImage from "../../../assets/advertised_property.png";
const AdvertisedProperty = () => {
  return (
    <div className="advertised_property">
      <div className="container">
        <h1 className="advertised_property_header p0 sm-text-center">
          Lorem Ipsum is simply
        </h1>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="advertised_property_content">
              <img
                src={AdvetisedImage}
                className="advertised_property_image"
                alt="advertised property"
              />
              <div className="advertised_property_content_detail">
                <h2>Property Name</h2>
                <p className="m0">Area Name</p>
                <div>
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 inline-block p2 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p2 text-center active button">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-none d-md-block">
            <div className="advertised_property_content">
              <img
                src={AdvetisedImage}
                className="advertised_property_image"
                alt="advertised property"
              />
              <div className="advertised_property_content_detail">
                <h2>Property Name</h2>
                <p className="m0">Area Name</p>
                <div>
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 inline-block p2 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p2 text-center active button">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-none d-md-block">
            <div className="advertised_property_content">
              <img
                src={AdvetisedImage}
                className="advertised_property_image"
                alt="advertised property"
              />
              <div className="advertised_property_content_detail">
                <h2>Property Name</h2>
                <p className="m0">Area Name</p>
                <div>
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 inline-block p2 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p2 text-center active button">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-none d-md-block">
            <div className="advertised_property_content">
              <img
                src={AdvetisedImage}
                className="advertised_property_image"
                alt="advertised property"
              />
              <div className="advertised_property_content_detail">
                <h2>Property Name</h2>
                <p className="m0">Area Name</p>
                <div>
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 inline-block p2 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p2 text-center active button">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProperty;
