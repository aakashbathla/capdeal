/* eslint-disable */
import React, { useState, useEffect } from "react";
import { fetchData } from "./Utils";
import Select from "react-select";

const getList = (props, url) => {
  const [dataList, setDataList] = useState([]);
  const updateFormData = (data) => {
    setDataList(data);
  };
  useEffect(() => {
    fetchData(props.options.url, updateFormData);
  }, []);
  let options;
  if (props.options.type === "normal") {
    options =
      dataList &&
      dataList.map(function(val) {
        return {
          value: val.value,
          label: val.display_name,
        };
      });
  } else {
    options =
      dataList &&
      dataList.map(function(val) {
        return {
          value: val.id,
          label: val.name,
        };
      });
  }

  const handleChange = (selectedOption) => {
    props.onChange(selectedOption.value);
  };
  return (
    <div>
      <Select
        name="form-field-name"
        // value={this.state.value}
        onChange={handleChange}
        // clearable={this.state.clearable}
        // searchable={this.state.searchable}
        options={options}
      />
    </div>
  );
};

export default getList;
