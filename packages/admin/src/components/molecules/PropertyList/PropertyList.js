/* eslint-disable */
import React from "react";
import PropertyCard from "../../atoms/PropertyCard";
import "./PropertyList.scss";

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
      <PropertyCard propertyTableId="table1" />
      <PropertyCard propertyTableId="table2" />
      <PropertyCard propertyTableId="table3"/>
      <PropertyCard propertyTableId="table4" />
    </div>
  );
};

export default PropertyList;
