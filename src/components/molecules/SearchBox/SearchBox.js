import React from "react";
import "./SearchBox.scss";
const SearchBox = () => {
  return (
    <div className="searchbox">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11 col-md-11 col-sm-12 searchbox_wrap">
            <div className="row pt-4 mt-2 pb-4 mb-3">
              <div className="col-lg-11 col-sm-12 offset-lg-1 offset-sm-0 mb-4 pb-3">
                <button className="btn btn-outline-primary active">Buy</button>
                <button className="btn btn-outline-primary">Rent</button>
                <button className="btn btn-outline-primary">Projects</button>
              </div>
              <div className="col-lg-2 col-sm-12 offset-lg-1 offset-sm-0 pr-0">
                <label>Property Type</label>
                <select className="form-control form-control-lg">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-lg-5 col-sm-12">
                <label>Property Name</label>
                <input className="form-control form-control-lg" type="text" placeholder="Search flat, plot, building, area" />
              </div>
              <div className="col-lg-2 col-sm-12 pl-0">
                <label>Budget</label>
                <select className="form-control form-control-lg">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-lg-2 col-sm-12 pl-0 searchbox_spacing">
                <button className="btn btn-primary btn-lg searchbox_btn btn-block">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
