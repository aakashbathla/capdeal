import React from "react";
import { useField } from "formik";

const Input = ({ label, iconClassName, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input className="text-input" {...field} {...props} />
      {iconClassName && (
        <span className="input-group-addon">
          <i className={iconClassName}></i>
        </span>
      )}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;
