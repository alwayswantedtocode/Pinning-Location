import React from "react";
import { InputFieldType } from "../Prop Types/PropTypes";

const InputForm = ({ type, placeholder, className, name, value, onChange, ...props }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || ""}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
      className={`border-2 border-[#ce5aff] rounded-[4px]  w-[16.4rem] h-[2.2875rem] bg-[#ffff] p-[0.4rem] focus:outline-none  ${className} `}
    />
  );
};
InputForm.propTypes = InputFieldType;
export default InputForm;
