import React from "react";
import "./ResaleProperties.scss";
import Card from "../../atoms/Card/Card";
import ResaleBgImage from "assets/resale-bg.png";

const ResaleProperties = () => {
  return (
    <div className="resale_properties" style={{backgroundImage: `url(`+ResaleBgImage+`)`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="resale_properties_header m0">
              Resale Properties
            </h1>
          </div>
        </div>
        <div className="resale_properties_container">
          <div className="row">
            <div className="col-lg-1">
              <ul className="resale_property_type">
                <li>Residential</li>
                <li>Commercial</li>
              </ul>
            </div>
            <div className="col-lg-11 p0 m0">
              <ul className="nav nav-pills resale_property_type_2" role="tablist" id="homePills">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="plot-tab"
                    data-toggle="pill"
                    href="#plot"
                    role="tab"
                    aria-controls="plot"
                    aria-selected="false"
                  >
                    Plot
                  </a>
                </li>
                <li className="nav-item">
                  <a
                      className="nav-link"
                      id="apartment-tab"
                      data-toggle="pill"
                      href="#apartment"
                      role="tab"
                      aria-controls="apartment"
                      aria-selected="false"
                    >
                      Apartment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="independent-tab"
                    data-toggle="pill"
                    href="#independent"
                    role="tab"
                    aria-controls="independent"
                    aria-selected="false"
                  >
                    Independent House
                  </a>
                </li>
                <li className="nav-item">
                <a
                  className="nav-link"
                  id="villa-tab"
                  data-toggle="pill"
                  href="#villa"
                  role="tab"
                  aria-controls="villa"
                  aria-selected="false"
                >
                  Villa
                </a>
                </li>
              </ul>
              <div className="col-lg-12 col-md-12 col-10 offset-1 offset-md-0">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="plot"
                    role="tabpanel"
                    aria-labelledby="plot-tab"
                  >
                    <div className="row mb-2">
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 d-none d-md-block">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 d-none d-md-block">
                        <Card />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="apartment"
                    role="tabpanel"
                    aria-labelledby="apartment-tab"
                  >
                    <div className="row mb-2">
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="independent"
                    role="tabpanel"
                    aria-labelledby="independent-tab"
                  >
                    <div className="row mb-2">
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="villa"
                    role="tabpanel"
                    aria-labelledby="villa-tab"
                  >
                    <div className="row mb-2">
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 resale_properties_card">
                        <Card />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center pt-4 link">View All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResaleProperties;
