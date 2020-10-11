import React from "react";
import "./SearchFilter.scss";
const SearchFilter = ({ filterData, search }) => {
  return (
    <div className="card search-filter pt-4 pb-4 mb-4">
      <form className="form-inline">
        <div className="col-sm-3 pl-0">
          <input
            name="name"
            type="text"
            placeholder="Search by name, builder or project"
            className="form-control form-control-lg mr-3 search-text"
            onChange={(e) => filterData({ search: e.target.value })}
            defaultValue={search}
          />
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Bed Room</option>
            <option>2BHK</option>
            <option>3BHK</option>
            <option>4BHK</option>
            <option>5BHK</option>
          </select>
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Property Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Apartment</option>
            <option>Penthouse</option>
            <option>Villa</option>
          </select>
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Budget</option>
            <option>&#8377; 10 Lac</option>
            <option>&#8377; 20 Lac</option>
            <option>&#8377; 30 Lac</option>
            <option>&#8377; 50 Lac</option>
          </select>
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Property Status</option>
            <option>Ready to move</option>
          </select>
        </div>
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};
export default SearchFilter;
