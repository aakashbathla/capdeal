import React, { useState, useEffect } from "react";
import "./AdvertisedProperty.scss";
import AdvetisedImage from "assets/advertised_property.png";
import AdvetisedBgImage from "assets/advertise-bg.png";
import CoinIcon from "assets/money.svg";
import BuildingIcon from "assets/buildings.png";
import FlagIcon from "assets/flag.png";
import LikeIcon from "assets/like.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import { fetchData } from "../../../utils/Utils";
import apis from "constants/apis/services";

const AdvertisedProperty = () => {
  const [dataList, setDataList] = useState([]);
  const updateFormData = (data) => {
    setDataList(data);
  };
  useEffect(() => {
    fetchData(apis.homepageProject, updateFormData);
  }, []);
  let history = useHistory();
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
        <div className="row">
          <div className="col-sm-12 col-md-11">
            <h1 className="advertised_property_header p0 sm-text-center">
              Hottest Projects
            </h1>
          </div>
          <div className="col-sm-12 col-md-1 text-right d-none d-lg-block">
            <div
              className="link cursor-pointer"
              onClick={() => {
                history.push("/project-list");
              }}
            >
              View All
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            {dataList &&
              dataList.map((val, key) => {
                return (
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="advertised_property_content">
                      <img
                        src={
                          val &&
                          val.media &&
                          val.media[0] &&
                          val.media[0].media_file &&
                          val.media[0].media_file.match(/.(jpg|jpeg|png|gif)$/i)
                            ? val.media[0].media_file
                            : AdvetisedImage
                        }
                        className="advertised_property_image"
                        alt="advertised property"
                      />
                      <div className="advertised_property_content_detail">
                        <h2 className="pl-2 ml-1 pt-2 mb-0">{val.name}</h2>
                        <p className="m0 pl-2 ml-1 pb-3">{val.address_line1}</p>
                        <div className="pl-2 ml-1 pb-2">
                          <span className="data">
                            <img
                              src={BuildingIcon}
                              height="14"
                              alt="Building Icon"
                              className="mr-2"
                            />
                            {val.floor_plans &&
                              val.floor_plans.length > 0 &&
                              val.floor_plans[0].title}
                          </span>{" "}
                          <span className="px-3 orange">|</span>
                          <span className="data">
                            <img
                              src={FlagIcon}
                              alt="flag icon"
                              height="12"
                              className="mr-2"
                            />
                            {val.floor_plans &&
                              val.floor_plans.length > 0 &&
                              val.floor_plans[0].saleable_area}
                          </span>
                        </div>
                        <h6 className="price pl-2 ml-1">
                          <CoinIcon height="18" width="18" className="mr-2" />
                          <span className="align-middle">
                            {val.min_price} to {val.max_price}
                          </span>
                        </h6>
                        <div>
                          <div className="width-50 light-grey-background inline-block p1 text-center button">
                            ShortList <img className="d-inline pl-3" src={LikeIcon} height="14" alt="like" />
                          </div>
                          <div
                            className="width-50 deep-purple-background  inline-block p1 text-center active button"
                            onClick={() => {
                              history.push(`project-detail/${val.id}`);
                            }}
                          >
                            Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
          <div className="col-md-12 pt-5 text-center d-lg-none">
            <div
              className="link cursor-pointer"
              onClick={() => {
                history.push("/project-list");
              }}
            >
              View All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProperty;
