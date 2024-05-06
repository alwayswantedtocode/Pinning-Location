import React from "react";
import { InputFieldType } from "../Prop Types/PropTypes";

const RadioField = ({ type, name, checked, onChange, ...props }) => {
  return (
    <input
      type={type}
      id="subscription"
      name={name}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      {...props}
      className="border-[1px] border-[#FAC03E] rounded-[4px] border-none w-[1.4rem] h-[2.2875rem] bg-[#f2f2f2] p-[0.4rem] "
    />
  );
};
RadioField.propTypes = InputFieldType;

export default RadioField;
