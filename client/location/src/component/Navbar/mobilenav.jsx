import React from "react";
import navdata from "./data";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import FormField from "../Inputs/FormField";
import useSearch from "../../hooks/useSearch";
import { useSelector } from "react-redux";

const MobileNav = ({ Toggle }) => {
  const { handleChange, input, } = useSearch();
  const {currentUser}=useSelector((state)=>state.auth)
  return (
    <div
      className={`h-[100%] w-[100%] top-[0rem] left-0 fixed bg-white transition-all duration-500 ease-in-out lg:hidden ${
        Toggle ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="Enter-app-cont px-[3rem]  lg:flex mt-5">
        {currentUser && (
          <div className="w-max h-max font-semibold text-lg uppercase flex items-center justify-center rounded-[4px] border-2 border-[#FAC03E]">
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
        )}
      </div>
      <div className="mobileNav flex flex-col justify-center items-center leading-1 text-lg font-medium">
        {navdata.map((mobile) => {
          const { id, nav } = mobile;
          return (
            <span
              className=" border-b-[2px] border-gray-200 w-[90%] flex justify-center items-center py-[0.5rem]"
              key={id}
            >
              {nav}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
