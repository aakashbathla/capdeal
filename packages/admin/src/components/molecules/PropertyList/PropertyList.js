/* eslint-disable */
import React from "react";
import "./PropertyList.scss";
import propertyImage from "assets/2.jpg";

const PropertyList = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h2>
            Property List
            <small className="text-muted">Manage Property</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <button
            className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
            type="button"
          >
            <i className="zmdi zmdi-plus"></i>
          </button>
        </div>
      </div>
      <div className="card property_list">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="property_image">
                <img
                  className="img-thumbnail img-fluid"
                  src={propertyImage}
                  alt="img"
                />
                <span className="badge badge-danger">For Sale</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="property-content">
                <div className="detail">
                  <h5 className="text-success m-t-0 m-b-0">
                    &#8377;390,000 - &#8377;430,000
                  </h5>
                  <h4 className="m-t-0">
                    <a href="#" className="col-blue-grey">
                      4BHK Rohini, New Delhi
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="zmdi zmdi-pin m-r-5"></i>245 White House Apt,
                    New Delhi 110006
                  </p>
                  <p className="text-muted m-b-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Aliquam gravida magna et fringilla convallis. Pellentesque
                    habitant morb
                  </p>
                </div>
                <div className="property-action m-t-15">
                  <a href="#" title="Square Feet">
                    <i className="zmdi zmdi-view-dashboard"></i>
                    <span>280</span>
                  </a>
                  <a href="#" title="Bedroom">
                    <i className="zmdi zmdi-hotel"></i>
                    <span>4</span>
                  </a>
                  <a href="#" title="Parking space">
                    <i className="zmdi zmdi-car-taxi"></i>
                    <span>2</span>
                  </a>
                  <a href="#" title="Garages">
                    <i className="zmdi zmdi-home"></i>
                    <span> 24H</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card property_list">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="property_image">
                <img
                  className="img-thumbnail img-fluid"
                  src={propertyImage}
                  alt="img"
                />
                <span className="badge badge-warning">For Rent</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="property-content">
                <div className="detail">
                  <h5 className="text-success m-t-0 m-b-0">
                    &#8377;390,000 - &#8377;430,000
                  </h5>
                  <h4 className="m-t-0">
                    <a href="#" className="col-blue-grey">
                      4BHK Nirvana Country, Gurgaon
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="zmdi zmdi-pin m-r-5"></i>123 E 20th St,
                    Gurgaon 122001
                  </p>
                  <p className="text-muted m-b-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Aliquam gravida magna et fringilla convallis. Pellentesque
                    habitant morb
                  </p>
                </div>
                <div className="property-action m-t-15">
                  <a href="#" title="Square Feet">
                    <i className="zmdi zmdi-view-dashboard"></i>
                    <span>280</span>
                  </a>
                  <a href="#" title="Bedroom">
                    <i className="zmdi zmdi-hotel"></i>
                    <span>4</span>
                  </a>
                  <a href="#" title="Parking space">
                    <i className="zmdi zmdi-car-taxi"></i>
                    <span>2</span>
                  </a>
                  <a href="#" title="Garages">
                    <i className="zmdi zmdi-home"></i>
                    <span> 24H</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card property_list">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="property_image">
                <img
                  className="img-thumbnail img-fluid"
                  src={propertyImage}
                  alt="img"
                />
                <span className="badge badge-danger">For Sale</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="property-content">
                <div className="detail">
                  <h5 className="text-success m-t-0 m-b-0">
                    &#8377;390,000 - &#8377;430,000
                  </h5>
                  <h4 className="m-t-0">
                    <a href="#" className="col-blue-grey">
                      3BHK Jaypee Group, Noida
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="zmdi zmdi-pin m-r-5"></i>245 E 20th St, Noida
                    201609
                  </p>
                  <p className="text-muted m-b-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Aliquam gravida magna et fringilla convallis. Pellentesque
                    habitant morb
                  </p>
                </div>
                <div className="property-action m-t-15">
                  <a href="#" title="Square Feet">
                    <i className="zmdi zmdi-view-dashboard"></i>
                    <span>280</span>
                  </a>
                  <a href="#" title="Bedroom">
                    <i className="zmdi zmdi-hotel"></i>
                    <span>4</span>
                  </a>
                  <a href="#" title="Parking space">
                    <i className="zmdi zmdi-car-taxi"></i>
                    <span>2</span>
                  </a>
                  <a href="#" title="Garages">
                    <i className="zmdi zmdi-home"></i>
                    <span> 24H</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card property_list">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="property_image">
                <img
                  className="img-thumbnail img-fluid"
                  src={propertyImage}
                  alt="img"
                />
                <span className="badge badge-danger">For Sale</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="property-content">
                <div className="detail">
                  <h5 className="text-success m-t-0 m-b-0">
                    &#8377;390,000 - &#8377;430,000
                  </h5>
                  <h4 className="m-t-0">
                    <a href="#" className="col-blue-grey">
                      4BHK Alexander Court, Banglore
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="zmdi zmdi-pin m-r-5"></i>245 E 20th St,
                    Banglore 201609
                  </p>
                  <p className="text-muted m-b-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Aliquam gravida magna et fringilla convallis. Pellentesque
                    habitant morb
                  </p>
                </div>
                <div className="property-action m-t-15">
                  <a href="#" title="Square Feet">
                    <i className="zmdi zmdi-view-dashboard"></i>
                    <span>280</span>
                  </a>
                  <a href="#" title="Bedroom">
                    <i className="zmdi zmdi-hotel"></i>
                    <span>4</span>
                  </a>
                  <a href="#" title="Parking space">
                    <i className="zmdi zmdi-car-taxi"></i>
                    <span>2</span>
                  </a>
                  <a href="#" title="Garages">
                    <i className="zmdi zmdi-home"></i>
                    <span> 24H</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
