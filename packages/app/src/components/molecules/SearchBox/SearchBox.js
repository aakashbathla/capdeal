import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBox.scss";
const SearchBox = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    var header = document.getElementById("sectionButton");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);
  let history = useHistory();
  const searchFunction = () => {
    history.push(`/project-list/?search=${value}`);
  };
  return (
    <div className="searchbox">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 searchbox_wrap">
            <div className="row pt-4 mt-2 pb-4 mb-3">
              <div
                className="col-lg-11 col-md-12 col-sm-12 offset-lg-1 offset-md-0 mb-4 pb-4 pb-md-3"
                id="sectionButton"
              >
                <button className="btn btn-outline-primary active">Buy</button>
                <button className="btn btn-outline-primary">Rent</button>
                <button className="btn btn-outline-primary">Projects</button>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 offset-lg-1 offset-sm-0 pr-lg-0 pr-md-0 mb-5 mb-md-0">
                <label>Property Type</label>
                <select className="form-control form-control-lg">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 mb-5 mb-md-0">
                <label>Property Name</label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Search flat, plot, building, area"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 pl-lg-0 pl-md-0 mb-5 mb-md-0">
                <label>Budget</label>
                <select className="form-control form-control-lg">
                  <option>&#8377; 10 Lac</option>
                  <option>&#8377; 20 Lac</option>
                  <option>&#8377; 30 Lac</option>
                  <option>&#8377; 50 Lac</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-12 searchbox_spacing">
                <button
                  className="btn btn-primary btn-lg searchbox_btn btn-block"
                  onClick={searchFunction}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
