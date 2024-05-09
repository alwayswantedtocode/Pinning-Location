import React, { useState } from "react";
import Login from "../../component/AuthComponents/login";
import Register from "../../component/AuthComponents/register";
import useHandleAlert from "../../hooks/useHandleAlert";
import Alert from "../../component/Custom Alert/Alert";
import Pastry from "../../Assets/Pastry.jpg";

export const Auth = () => {
  const { alert, setAlert, showAlert } = useHandleAlert();

  const data = [
    { id: 1, AuthComponent: <Login /> },
    { id: 2, AuthComponent: <Register /> },
  ];
  const buttons = [{ name: "LogIn" }, { name: "Register" }];

  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
   
      <section className=" w-[100vw] h-[100vh] flex relative bg-[#BDA2A9]">
        <div className="hidden lg:flex-auto lg:w-[50%] lg:flex  relative z-[99] bg-[#0a0a0a80]">
          <div className="w-[100%] h-[100%]">
            <img
              src={Pastry}
              alt={Pastry}
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
        <div className=" justify-center flex-auto w-[50%] p-[9rem] bg-[#BDA2A9]  relative">
          <div className="w-[100%] flex  items-center justify-center mb-[1rem] ">
            {buttons.map((btns, index) => {
              return (
                <button
                  className={`w-[30%] p-[0.3rem] font-semibold text-2xl flex items-center    ${
                    activeTab === index ? "text-grey-700" : "text-gray-300"
                  } ${
                    index === 0
                      ? "border-r-2 border-black justify-end"
                      : "border-l-2  border-black justify-start"
                  }`}
                  key={index}
                  onClick={() => handleActiveTab(index)}
                >
                  {btns.name}
                </button>
              );
            })}
          </div>
          <div className="flex  justify-center border-3 border-yellow-600 relative c">
            {data.map((auth, index) => {
              return (
                <div
                  className={`absolute  ${
                    activeTab === index ? "flex " : "hidden"
                  }`}
                  key={auth.id}
                >
                  {auth.AuthComponent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
