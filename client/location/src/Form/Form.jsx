import React from "react";
import FormField from "../component/Inputs/FormField";
import useAddGetCustomer from "../hooks/useAddGetCustomer";

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
    <div className=" w-[100%] lg:flex-auto lg:w-[35%]  p-[2rem] flex flex-col items-center justify-center z-10 shadow-xl drop-shadow-custom bg-[#BDA2A9]">
      <div className="text-2xl font-semibold flex items-center text-center p-[1rem] w-max">
        <h3>
          Pin Customer's
          <br/> Location
        </h3>
      </div>
      <div className="w-[100%] bg-[#ffff]  rounded-[1rem] shadow-xl m-[3rem] p-[2rem] flex items-center justify-center border-[2px] ">
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
              className="rounded-[4px] border-none bg-[#efc364] hover:bg-[#FAC03E] w-[6rem] h-[2.4rem] "
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
