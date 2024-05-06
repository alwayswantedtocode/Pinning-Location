import React, { useState } from "react";
import FormField from "../Inputs/FormField";
import { FiSearch, FiUser } from "react-icons/fi";

import Navigator from "./data";

const Navbar = () => {
  const [input, setInputs] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...input, [name]: value });
  };

  return (
    <>
      <nav className="w-[90%] h-[4.5rem] flex items-center justify-between  ">
        <div className="w-[15%]  font-bold text-2xl capitalize flex items-center  font-negative cursor-pointer ">
          <span className=" font-extrabold p-3 rounded-tl-[0.3rem] rounded-bl-[0.3rem]">
            Lara Pastry
          </span>
          {/* <span className="p-3 rounded-tr-[0.3rem] rounded-br-[0.3rem]">
            Pastry
          </span> */}
        </div>
        <div className="h-[100%] w-[60%] flex items-center justify-center gap-[30px] capitalize ">
          {Navigator.map((navigate, index) => {
            const { id, nav } = navigate;
            return (
              <div
                className=" h-[100%] flex items-center font-bold text-2xl hover:bg-[#9593B9] cursor-pointer"
                key={id}
              >
                <span className=" p-3">{nav}</span>
              </div>
            );
          })}
        </div>
        <div className=" w-[30%]">
          <div className="w-max h-max font-bold text-lg uppercase flex items-center justify-center rounded-[4px] border-2 border-[#FAC03E]">
            <div className="flex items-align justify-center p-[0.2rem]">
              <FiSearch />
            </div>
            <FormField
              type="text"
              placeholder="search..."
              name="search"
              value={input.search}
              onChange={(e) => handleChange("search", e)}
              className="border-none focus:outline-none"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
