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
      {options && !props.value && (
        <Select
          name="form-field-name"
          onChange={handleChange}
          options={options}
        />
      )}
      {options && props && props.value && (
        <Select
          name="form-field-name"
          value={options.filter((option) => {
            if (props && props.value && props.value.id) {
              if (option.value === props.value.id) {
                handleChange(option);
                return;
              }
            } else if (props && props.value && !props.value.id) {
              return option.value === props.value;
            }
          })}
          onChange={handleChange}
          options={options}
        />
      )}
    </div>
  );
};

export default getList;
