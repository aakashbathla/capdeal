import React from "react";
import "./AdvertisedProperty.scss";
import AdvetisedImage from "assets/advertised_property.png";
import AdvetisedBgImage from "assets/advertise-bg.png";
import CoinIcon from "assets/money.svg";
import BuildingIcon from "assets/buildings.png";
import FlagIcon from "assets/flag.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useMediaQuery } from "react-responsive";

const AdvertisedProperty = () => {
  const isMobile = useMediaQuery({
    maxWidth: 768,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
  };
  return (
    <div
      className="advertised_property"
      style={{ backgroundImage: `url(` + AdvetisedBgImage + `)` }}
    >
      <div className="container">
        <h1 className="advertised_property_header p0 sm-text-center">
          Lorem Ipsum is simply
        </h1>
        <div className="row">
          <Slider {...settings}>
            <div className="col-lg-12 col-md-12 col-12">
              <div className="advertised_property_content">
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <div className="advertised_property_content_detail">
                  <h2 className="pl-2 ml-1 pt-2 mb-0">Property Name</h2>
                  <p className="m0 pl-2 ml-1 pb-3">Area Name</p>
                  <div className="pl-2 ml-1 pb-2">
                    <span className="data">
                      <img
                        src={BuildingIcon}
                        height="14"
                        alt="Building Icon"
                        className="mr-2"
                      />
                      2BHK-3BHK
                    </span>{" "}
                    <span className="px-3 orange">|</span>
                    <span className="data">
                      <img
                        src={FlagIcon}
                        alt="flag icon"
                        height="12"
                        className="mr-2"
                      />
                      1090-1460 SF (Saleable)
                    </span>
                  </div>
                  <h6 className="price pl-2 ml-1">
                    <CoinIcon height="18" width="18" className="mr-2" />
                    <span className="align-middle">41.2 Lac to 55.48 Lac</span>
                  </h6>
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
            <div className="col-lg-12 col-md-12 col-12">
              <div className="advertised_property_content">
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <div className="advertised_property_content_detail">
                  <h2 className="pl-2 ml-1 pt-2 mb-0">Property Name</h2>
                  <p className="m0 pl-2 ml-1 pb-3">Area Name</p>
                  <div className="pl-2 ml-1 pb-2">
                    <span className="data">
                      <img
                        src={BuildingIcon}
                        alt="building icon"
                        height="14"
                        className="mr-2"
                      />
                      2BHK-3BHK
                    </span>
                    <span className="px-3 orange">|</span>
                    <span className="data">
                      <img
                        src={FlagIcon}
                        alt="flag icon"
                        height="12"
                        className="mr-2"
                      />
                      1090-1460 SF (Saleable)
                    </span>
                  </div>
                  <h6 className="price pl-2 ml-1">
                    <CoinIcon height="18" width="18" className="mr-2" />
                    <span className="align-middle">41.2 Lac to 55.48 Lac</span>
                  </h6>
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
            <div className="col-lg-12 col-md-12 col-12">
              <div className="advertised_property_content">
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <div className="advertised_property_content_detail">
                  <h2 className="pl-2 ml-1 pt-2 mb-0">Property Name</h2>
                  <p className="m0 pl-2 ml-1 pb-3">Area Name</p>
                  <div className="pl-2 ml-1 pb-2">
                    <span className="data">
                      <img
                        src={BuildingIcon}
                        alt="building icon"
                        height="14"
                        className="mr-2"
                      />
                      2BHK-3BHK
                    </span>
                    <span className="px-3 orange">|</span>
                    <span className="data">
                      <img
                        src={FlagIcon}
                        alt="flag icon"
                        height="12"
                        className="mr-2"
                      />
                      1090-1460 SF (Saleable)
                    </span>
                  </div>
                  <h6 className="price pl-2 ml-1">
                    <CoinIcon height="18" width="18" className="mr-2" />
                    <span className="align-middle">41.2 Lac to 55.48 Lac</span>
                  </h6>
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
            <div className="col-lg-12 col-md-12 col-12">
              <div className="advertised_property_content">
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <div className="advertised_property_content_detail">
                  <h2 className="pl-2 ml-1 pt-2 mb-0">Property Name</h2>
                  <p className="m0 pl-2 ml-1 pb-3">Area Name</p>
                  <div className="pl-2 ml-1 pb-2">
                    <span className="data">
                      <img
                        src={BuildingIcon}
                        alt="building icon"
                        height="14"
                        className="mr-2"
                      />
                      2BHK-3BHK
                    </span>
                    <span className="px-3 orange">|</span>
                    <span className="data">
                      <img
                        src={FlagIcon}
                        alt="flag icon"
                        height="12"
                        className="mr-2"
                      />
                      1090-1460 SF (Saleable)
                    </span>
                  </div>
                  <h6 className="price pl-2 ml-1">
                    <CoinIcon height="18" width="18" className="mr-2" />
                    <span className="align-middle">41.2 Lac to 55.48 Lac</span>
                  </h6>
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
            <div className="col-lg-12 col-md-12 col-12">
              <div className="advertised_property_content">
                <img
                  src={AdvetisedImage}
                  className="advertised_property_image"
                  alt="advertised property"
                />
                <div className="advertised_property_content_detail">
                  <h2 className="pl-2 ml-1 pt-2 mb-0">Property Name</h2>
                  <p className="m0 pl-2 ml-1 pb-3">Area Name</p>
                  <div className="pl-2 ml-1 pb-2">
                    <span className="data">
                      <img
                        src={BuildingIcon}
                        alt="building icon"
                        height="14"
                        className="mr-2"
                      />
                      2BHK-3BHK
                    </span>
                    <span className="px-3 orange">|</span>
                    <span className="data">
                      <img
                        src={FlagIcon}
                        alt="flag icon"
                        height="12"
                        className="mr-2"
                      />
                      1090-1460 SF (Saleable)
                    </span>
                  </div>
                  <h6 className="price pl-2 ml-1">
                    <CoinIcon height="18" width="18" className="mr-2" />
                    <span className="align-middle">41.2 Lac to 55.48 Lac</span>
                  </h6>
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProperty;
