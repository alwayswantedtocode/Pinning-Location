import React, { useState } from "react";
import FormField from "../Inputs/FormField";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [input, setInputs] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...input, [name]: value });
  };

  return (
    <>
      <nav className="w-[100%] h-[4.5rem] flex items-center justify-between ">
        <div className="font-bold text-2xl uppercase flex items-center justify-center  font-slab  ">
          <span className=" bg-yellow-400  font-extrabold p-2 rounded-tl-[0.3rem] rounded-bl-[0.3rem] ">
            Lara
          </span>
          <span className="bg-[#ce5aff] p-2 rounded-tr-[0.3rem] rounded-br-[0.3rem]">
            Pastry
          </span>
        </div>
        <div className="w-max h-max font-bold text-lg uppercase flex items-center justify-center rounded-[4px] border-2 border-[#ce5aff]">
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
      </nav>
    </>
  );
};

export default Navbar;
