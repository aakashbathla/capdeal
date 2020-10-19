/* eslint-disable */
import React, { useState, useEffect } from "react";
import { fetchData } from "../../../utils/Utils";
import Select from "react-select";

const getList = (props, url) => {
  const [dataList, setDataList] = useState([]);
  const [selectedValue, setSelectedValue] = useState(props.value);
  const updateFormData = (data) => {
    setDataList(data);
  };
  useEffect(() => {
    fetchData(props && props.options && props.options.url, updateFormData);
  }, []);
  let options = [{ value: "", label: "Select Option" }];
  let opt;
  if (props && props.options && props.options.type === "normal") {
    opt =
      dataList &&
      dataList.map(function (val) {
        return {
          value: val.value,
          label: val.display_name,
        };
      });
  } else {
    console.log(dataList);
    opt =
      dataList &&
      dataList.length > 0 &&
      dataList.map(function (val) {
        return {
          value: val.id,
          label: val.name,
        };
      });
  }
  if (opt) {
    options = options.concat(opt);
  }
  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption.value);
    props.onChange(selectedOption.value);
  };
  return (
    <div>
      {options && !props.value && (
        <Select
          name="form-field-name"
          onChange={handleChange}
          options={options}
          className={props.className}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
        />
      )}
      {options && props && props.value && (
        <Select
          name="form-field-name"
          value={options.find((option) => {
            if (props && selectedValue && selectedValue.id) {
              if (option.value === selectedValue.id) {
                handleChange(option);
                return;
              }
            } else if (props && selectedValue && !selectedValue.id) {
              return option.value === selectedValue;
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
