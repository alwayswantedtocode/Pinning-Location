import React, { useCallback, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/navbar";
import { FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";
import useHandleLogout from "../hooks/useHandleLogout";
import { Logout } from "../component/Logout/Logout";

const Layout = () => {
  const dropDownRef = useRef();
  const { showDropdown, handleDropDown, setShowDropdown } =
    useHandleLogout(dropDownRef);

  const handleCloseDropDown = useCallback(
    (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setShowDropdown(!showDropdown);
      }
    },
    [dropDownRef, showDropdown,setShowDropdown]
  );




  useEffect(() => {
    document.addEventListener("mousedown", handleCloseDropDown);
    return () => {
      document.removeEventListener("mousedown", handleCloseDropDown);
    };
  }, []);
  return (
    <>
      <header className="w-[100%]  h-[5rem] flex items-center justify-center z-[99] shadow-xl relative font-negative">
        <Navbar />

        <div
          ref={dropDownRef}
          id="user-icon"
          className="flex gap-[10px] items-center border-2 h-[100%] text-xl px-[1rem] font-semibold bg-[#BDA2A9] cursor-pointer"
          onClick={() => handleDropDown()}
        >
          <FiUser />
          <span className="flex items-center justify-center p-[0.2rem]">
            {showDropdown ? <FiChevronDown /> : <FiChevronUp />}
          </span>
        </div>

        <aside
          id="drop-down"
          className={`w-[18rem] h-max absolute right-[1%] top-[100%] bottom-0 rounded-[0.5rem] shadow-2xl drop-shadow-custom z-[999] bg-slate-100 ${
            showDropdown ? "flex" : "hidden"
          }`}
        >
          <Logout />
        </aside>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
