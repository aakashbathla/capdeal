import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useMediaQuery } from "react-responsive";
import ProjectDetail1 from "assets/project-detail11.png";
import ProjectDetail2 from "assets/project-detail1.png";
import "./ProjectDetailSlider.scss";

const ProjectDetailSlider = () => {
  const isMobile = useMediaQuery({
    maxWidth: 768,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical: true,
    verticalScrolling: true,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 1,
  };
  return (
    <div className="row">
      <div className="col-lg-10 col-md-12 col-12 pr-0">
        <img
          src={ProjectDetail2}
          className="img-fluid"
          alt="prop img"
        />
      </div>
      <div className="col-lg-2 col-md-12 col-12 slider_wrap">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src={ProjectDetail1}
              className=""
              alt="advertised property"
            />
          </div>
          <div className="slider-item">
            <img
              src={ProjectDetail1}
              className=""
              alt="advertised property"
            />
          </div>
          <div className="slider-item">
            <img
              src={ProjectDetail1}
              className=""
              alt="advertised property"
            />
          </div>
          <div className="slider-item">
            <img
              src={ProjectDetail1}
              className=""
              alt="advertised property"
            />
          </div>
          <div className="slider-item">
            <img
              src={ProjectDetail1}
              className=""
              alt="advertised property"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProjectDetailSlider;
