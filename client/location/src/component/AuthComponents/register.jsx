import React, { useState } from "react";
import FormField from "../Inputs/FormField";
import useAuth from "../../hooks/useAuth";
import {BiInfoCircle} from "react-icons/bi"

const Register = () => {
  const {
    handleOnchange,
    inputs,
    validRegName,
    validRegEmail,
    validRegPassword,
    onRegisterSubmit,
    focusReg,
    setFocusReg,
    handleFocus,
  } = useAuth();

  return (
    <div className=" flex flex-col w-[100%] h-max items-center justify-center p-[3rem] gap-[30px]">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="">Don't have an acount? create one here</p>
      </div>
      <form className="flex gap-[30px] flex-col" onSubmit={onRegisterSubmit}>
        <div
          className={`w-max h-max  text-lg  flex items-center justify-center rounded-[4px] border-2 ${
            validRegName || !inputs.Username
              ? "border-[#FAC03E]"
              : " border-[#eb524a]"
          }`}
        >
          <FormField
            placeholder="Username"
            type="text"
            // label="Username"
            name="Username"
            value={inputs.Username}
            onChange={(e) => handleOnchange("Username", e)}
            required
            className="border-none focus:outline-none"
          />
        </div>
        <div
          className={`w-max h-max  text-lg  flex items-center justify-center rounded-[4px] border-2 ${
            validRegEmail || !inputs.Email
              ? "border-[#FAC03E]"
              : " border-[#eb524a]"
          }`}
        >
          <FormField
            placeholder="Email"
            type="text"
            //   label="Email"
            name="Email"
            value={inputs.Email}
            onChange={(e) => handleOnchange("Email", e)}
            required
            className="border-none focus:outline-none"
          />
        </div>

        <div
          className={`w-max h-max  text-lg  flex flex-col items-center justify-center rounded-[4px] border-2 relative ${
            validRegPassword || !inputs.Password
              ? "border-[#FAC03E]"
              : " border-[#eb524a]"
          }`}
        >
          <FormField
            placeholder="Password"
            type="password"
            //   label="Password"
            name="Password"
            value={inputs.Password}
            onChange={(e) => handleOnchange("Password", e)}
            // onFocus={() => setFocusReg(true)}
            required
            className="border-none focus:outline-none"
          />
        </div>
        <div
          className={`w-[15rem]  flex items-center  bottom-[30%] `}
          id="uidnote"
          style={{ fontSize: 0.8 + "rem", padding: 0.3 + "rem" }}
        >
          <span className="flex flex-col  ">
            <BiInfoCircle
              className="text-[1rem]"
              style={{ color: "3A6EA5" }}
            />
            Password must have 8 to 24 characters, aleast one Uppercase,
            Lowercase letters, and a special charater.
          </span>
        </div>
        <div className="mt-[0.6rem] text-lg font-semibold ">
          <button
            className="rounded-[4px] border-none bg-[#efc364] hover:bg-[#FAC03E] w-[6rem] h-[2.4rem] "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
