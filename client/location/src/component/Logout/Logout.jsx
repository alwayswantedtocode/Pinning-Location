import React from "react";
import { useSelector } from "react-redux";
import UserIcon from "../../Assets/user-circle-svgrepo-com.svg";
import useHandleLogout from "../../hooks/useHandleLogout";

export const Logout = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { LogOut } = useHandleLogout();
  return (
    <article className="w-[100%] h-max flex flex-col">
      {currentUser ? (
        <div className="w-[100%] h-max flex flex-col items-center p-[1rem] gap-[20px]">
          <div className="w-[100%] h-max flex items-center gap-[20px] py-[1rem] px-[0.5rem] hover:bg-[#BDA2A9] rounded-[0.5rem] shadow-2xl drop-shadow-custom ">
            <div className="w-[2.5rem] h-[2.5rem] cursor-pointer ">
              <img
                src={currentUser?.profilePicture || UserIcon}
                alt="userIcon"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <span className="cursor-pointer text-2xl font-semibold capitalize">
              {currentUser?.Username}
            </span>
          </div>

          <span
            className="w-[100%] rounded-[0.5rem] flex items-center py-[1rem] px-[0.5rem] text-xl font-semibold capitalize hover:bg-[#BDA2A9] cursor-pointer"
            onClick={LogOut}
          >
            Logout
          </span>
        </div>
      ) : (
        <div className="w-[100%] h-max flex flex-col items-center p-[1rem] gap-[20px]">
          <span className="w-[100%] rounded-[0.5rem] flex items-center py-[1rem] px-[0.5rem] text-xl font-semibold capitalize hover:bg-[#BDA2A9] cursor-pointer">
            Login/Register
          </span>
        </div>
      )}
    </article>
  );
};
