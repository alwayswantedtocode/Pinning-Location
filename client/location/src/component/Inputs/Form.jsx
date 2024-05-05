import React from "react";
import FormField from "./FormField";
import useAddGetCustomer from "../../hooks/useAddGetCustomer";

const Form = () => {
  const { inputs, setInputs, notification, setNotification, handleSubmit } =
    useAddGetCustomer();

// handling input onchange and onchecked
  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleRadioChange = (name, checked) => {
    setNotification({ ...notification, [name]: checked });
  };

  return (
    <div className="flex-auto w-[25%] bg-[#ffff] m-[3rem] p-[2rem] flex items-center justify-center rounded-[1rem] shadow-xl">
      <form className="flex flex-col gap-[10px] " onSubmit={handleSubmit}>
        <FormField
          placeholder="Name"
          type="text"
          label="Name"
          name="Name"
          value={inputs.Name}
          onChange={(e) => handleChange("Name", e)}
          required
        />
        <FormField
          placeholder="Email"
          type="text"
          label="Email"
          name="Email"
          value={inputs.Email}
          onChange={(e) => handleChange("Email", e)}
          required
        />
        <FormField
          placeholder="Number"
          type="text"
          label="Phone Number"
          name="PhoneNumber"
          value={inputs.PhoneNumber}
          onChange={(e) => handleChange("PhoneNumber", e)}
          required
        />
        <FormField
          placeholder="Address"
          type="text"
          label="Address"
          name="Address"
          value={inputs.Address}
          onChange={(e) => handleChange("Address", e)}
          required
        />

        <FormField
          type="checkbox"
          label="send notification email"
          name="notification"
          checked={notification["notification"]}
          onChange={(e) => handleRadioChange("notification", e)}
          required
        />
        <div className="mt-[0.6rem] text-lg font-semibold ">
          <button
            className="rounded-[4px] border-none bg-[#e5a7ff] hover:bg-[#ce5aff] w-[6rem] h-[2.4rem] "
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
