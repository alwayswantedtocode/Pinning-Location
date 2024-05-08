import TypeofInputFields from "./Input Fields/TypeofInputFields";
import InputField from "./Input Fields/InputField";
import RadioField from "./Input Fields/RadioField";

const InputCases = ({ type, props }) => {
  switch (type) {
    case TypeofInputFields.TEXT:
    case TypeofInputFields.NUMBER:
    case TypeofInputFields.EMAIL:
    case TypeofInputFields.PASSWORD:
      return <InputField {...{ ...props, type }} />;
    case TypeofInputFields.RADIO:
      return <RadioField {...{ ...props, type }} />;
    default:
      return null;
  }
};
export default InputCases;
