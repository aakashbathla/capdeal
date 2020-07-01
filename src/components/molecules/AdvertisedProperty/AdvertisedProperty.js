import React from "react";
import "./AdvertisedProperty.scss";
import AdvetisedImage from "assets/advertised_property.png";
import AdvetisedBgImage from "assets/advertise-bg.png";
const AdvertisedProperty = () => {
  return (
    <div className="advertised_property" style={{backgroundImage: `url(`+AdvetisedBgImage+`)`}}>
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
                <h2 className="pl-2">Property Name</h2>
                <p className="m0 pl-2">Area Name</p>
                <div className="pl-2">
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price pl-2">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 light-grey-background inline-block p1 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p1 text-center active button">
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
                <h2 className="pl-2">Property Name</h2>
                <p className="m0 pl-2">Area Name</p>
                <div className="pl-2">
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price pl-2">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 light-grey-background inline-block p1 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p1 text-center active button">
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
                <h2 className="pl-2">Property Name</h2>
                <p className="m0 pl-2">Area Name</p>
                <div className="pl-2">
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price pl-2">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 light-grey-background inline-block p1 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p1 text-center active button">
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
                <h2 className="pl-2">Property Name</h2>
                <p className="m0 pl-2">Area Name</p>
                <div className="pl-2">
                  <span className="data">2BHK-3BHK</span>{" "}
                  <span className="px-3 orange">|</span>{" "}
                  <span className="data">1090-1460 SF (Saleable)</span>
                </div>
                <h6 className="price pl-2">41.2 Lac to 55.48 Lac</h6>
                <div>
                  <div className="width-50 light-grey-background inline-block p1 text-center button">
                    ShortList
                  </div>
                  <div className="width-50 deep-purple-background  inline-block p1 text-center active button">
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
