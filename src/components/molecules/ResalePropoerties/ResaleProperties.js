import React from "react";
import "./ResaleProperties.scss";
import Card from "../../atoms/Card/Card";
const ResaleProperties = () => {
  return (
    <div className="resale_properties">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="resale_properties_header p0 m0">
              Resale Properties
            </h1>
          </div>
        </div>
        <div className="resale_properties_container">
          <div className="row">
            <div className="col-lg-1">
              <ul className="resale_property_type">
                <li className="active">Residential</li>
                <li>Commercial</li>
              </ul>
            </div>
            <div className="col-lg-11 p0 m0">
              <ul className="resale_property_type_2">
                <li className="active">Plot</li>
                <li>Apartment</li>
                <li>Independent House</li>
                <li>Villa</li>
              </ul>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <Card />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 d-none d-md-block">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 d-none d-md-block">
                    <Card />
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

export default ResaleProperties;
