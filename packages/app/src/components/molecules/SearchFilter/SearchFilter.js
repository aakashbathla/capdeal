import React from "react";
import "./SearchFilter.scss";
import Select from "../../atoms/Select";
import apis from "../../../constants/apis/services";
import { useHistory } from "react-router-dom";
const SearchFilter = ({ filterData, search, searchClick }, props) => {
  let history = useHistory();
  const floorPlan = {
    options: { url: apis.floorPlanChoice, type: "normal" },
  };
  const projectType = {
    options: { url: apis.projectTypeChoice, type: "normal" },
  };
  const projectStatus = {
    options: { url: apis.projectStatusChoice, type: "normal" },
  };
  let parameters =
    (history &&
      history.location &&
      history.location.search &&
      paramsToObject(
        new URLSearchParams(history.location.search.slice(1)).entries()
      )) ||
    {};
  console.log(
    history &&
      history.location &&
      history.location.search &&
      paramsToObject(
        new URLSearchParams(history.location.search.slice(1)).entries()
      )
  );
  function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  }
  console.log(history);
  return (
    <div className="card search-filter pt-4 pb-4 mb-4">
      <form className="form-inline">
        <div className="col-sm-3 pl-0">
          <input
            name="name"
            type="text"
            placeholder="Search by name, builder or project"
            className="form-control form-control-lg mr-3 search-text"
            onChange={(e) => (parameters.search = e.target.value)}
            defaultValue={search}
          />
        </div>
        <div className="col-sm-2 pl-0">
          <Select
            {...floorPlan}
            placeholder="Bed Room"
            className="form-control form-control-lg mr-3"
            onChange={(value) => (parameters.floor_plans__title = value)}
            value={parameters.floor_plans__title}
          />
        </div>
        <div className="col-sm-2 pl-0">
          <Select
            {...projectType}
            placeholder="Property Type"
            className="form-control form-control-lg mr-3"
            onChange={(value) => (parameters.property_type = value)}
            value={parameters.property_type}
          />
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
          <Select
            {...projectStatus}
            placeholder="Project Status"
            className="form-control form-control-lg mr-3"
            onChange={(value) => (parameters.status = value)}
            value={parameters.status}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            history.push({
              pathname: "/project-list",
              search: "?" + new URLSearchParams(parameters).toString(),
            });
            console.log(props);
            searchClick(parameters);
          }}
          type="button"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchFilter;
