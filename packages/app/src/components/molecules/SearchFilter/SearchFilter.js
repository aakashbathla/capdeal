import React from "react";
import "./SearchFilter.scss";
const SearchFilter = () => {
  return (
    <div className="card search-filter pt-4 pb-4 mb-5">
      <form className="form-inline">
        <select
          name="name"
          type="text"
          className="form-control form-control-lg mr-3"
        >
          <option>Looking for</option>
          <option>Option 2</option>
        </select>
        <input
          name="name"
          type="text"
          placeholder="Search by name, builder or project"
          className="form-control form-control-lg mr-3 search-text"
        />
        <select
          name="name"
          type="text"
          className="form-control form-control-lg mr-3"
        >
          <option>Bed Room</option>
          <option>Option 2</option>
        </select>
        <select
          name="name"
          type="text"
          className="form-control form-control-lg mr-3"
        >
          <option>Property Type</option>
          <option>Option 2</option>
        </select>
        <select
          name="name"
          type="text"
          className="form-control form-control-lg mr-3"
        >
          <option>Budget</option>
          <option>Option 2</option>
        </select>
        <select
          name="name"
          type="text"
          className="form-control form-control-lg mr-3"
        >
          <option>Property Status</option>
          <option>Option 2</option>
        </select>
        <select
          name="name"
          type="text"
          className="form-control form-control-lg mr-3"
        >
          <option>More</option>
          <option>Option 2</option>
        </select>
        <button className="btn btn-primary">Close Form</button>
      </form>
    </div>
  );
};
export default SearchFilter;
