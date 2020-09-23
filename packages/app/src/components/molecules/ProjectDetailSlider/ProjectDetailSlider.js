import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ProjectDetail1 from "assets/project-detail11.png";
import ProjectDetail2 from "assets/project-detail1.png";
import SampleVideo from "assets/sample-video.mp4";
import "./ProjectDetailSlider.scss";

const images = [
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
  {
    original: ProjectDetail2,
    thumbnail: ProjectDetail1,
  },
];

const ProjectDetailSlider = ({ data }) => {
  const [status, setStatus] = useState(false);
  const settings = {
    infinite: true,
    showFullscreenButton: false,
    showPlayButton: false,
    autoPlay: false,
    showNav: false,
    thumbnailPosition: 'right',
  };

  return (
    <div className="row">
      <div className="col-md-12 col-12">
        <ImageGallery items={images}  {...settings} />
        { status && 
          <div className="video-wrap">
            <video width="100%" height="470" controls autoplay>
              <source src={SampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span title="Close Video" className="close-video" onClick={() => setStatus(!status)}><i className="zmdi zmdi-close"></i></span>
          </div>
        }
        <div className="video-thumbnail" onClick={() => setStatus(!status)}>
          <img width="92" src={ProjectDetail1} alt="video" />
          <span className="play-btn"><i className="zmdi zmdi-play-circle-outline"></i></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSlider;
