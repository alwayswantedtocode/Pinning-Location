import React, { useState } from "react";
import Navigator from "./data";
import FormField from "../Inputs/FormField";
import MobileNav from "./mobilenav";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import useSearch from "../../hooks/useSearch";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { handleChange, input } = useSearch();
  const [revealMenu, setRevealMenu] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="w-[90%] h-[4.5rem]  items-center justify-between flex ">
        <div className=" flex gap-[10px]">
          {" "}
          <div
            className="flex lg:hidden items-center text-4xl cursor-pointer"
            onClick={() => setRevealMenu(!revealMenu)}
          >
            {revealMenu ? <FiX /> : <FiMenu />}
          </div>
          <div className="w-max border font-bold text-2xl capitalize flex items-center  font-negative cursor-pointer ">
            <span className=" font-extrabold p-3 rounded-tl-[0.3rem] rounded-bl-[0.3rem]">
              Lara Pastry
            </span>
          </div>
        </div>

        <div className="h-[100%] w-[60%] hidden lg:flex items-center justify-center gap-[30px] capitalize ">
          {Navigator.map((navigate, index) => {
            const { id, nav } = navigate;
            return (
              <div
                className=" h-[100%] flex items-center font-bold text-2xl hover:bg-[#BDA2A9] cursor-pointer"
                key={id}
              >
                <span className=" p-3">{nav}</span>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:flex w-[30%]">
          {currentUser && (
            <div className="w-max h-max font-semibold text-lg  flex items-center justify-center rounded-[4px] border-2 border-[#FAC03E]">
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
        <aside
          className={`fixed top-[5rem] right-0 w-full h-full z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30 lg:hidden ${
            revealMenu ? "visible" : "invisible"
          } `}
        >
          <MobileNav Toggle={revealMenu} />
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
