import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ProjectDetail1 from "assets/project-detail11.png";
import ProjectDetail2 from "assets/project-detail1.png";
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


const ProjectDetailSlider = () => {
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
      </div>
    </div>
  );
};

export default ProjectDetailSlider;
