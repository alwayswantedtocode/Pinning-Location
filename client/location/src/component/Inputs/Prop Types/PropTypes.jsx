import PropTypes from "prop-types";

export const InputFieldType = {
  value: PropTypes.any,
  checked: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className:PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export const DropdownFieldType = {
  ...InputFieldType,
  data: PropTypes.any,
  dataLabel: PropTypes.string,
};
