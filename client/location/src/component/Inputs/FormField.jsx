import InputCase from "./InputCases";
import { InputFieldType } from "./Prop Types/PropTypes";
const FormField = ({
  value,
  id,
  onChange,
  label,
  type,
  required,
  ...props
}) => {
  return (
    <>
      {type ? (
        <div className={``}>
          {label && (
            <label className="block text-sm mb-2">
              {label}
              {required ? <span className="text-[red]"> &#42;</span> : null}
            </label>
          )}
          <InputCase type={type} props={{ ...props, value, onChange, id }} />
        </div>
      ) : null}
    </>
  );
};
FormField.propTypes = InputFieldType;
export default FormField;
