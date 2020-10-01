import React from "react";
import "./SearchFilter.scss";
const SearchFilter = ({ filterData }) => {
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
          />
        </div>
        {/* <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Bed Room</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Property Type</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Budget</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="col-sm-2 pl-0">
          <select
            name="name"
            type="text"
            className="form-control form-control-lg mr-3"
          >
            <option>Property Status</option>
            <option>Option 2</option>
          </select>
        </div>
          <button className="btn btn-primary">Search</button> */}
      </form>
    </div>
  );
};
export default SearchFilter;
