import React, { useEffect, useState } from "react";
import useHandleAlert from "../../hooks/useHandleAlert";
import { FiX } from "react-icons/fi";
import "../../index.css";

const Alert = ({ alert, status, message }) => {
  // const { alert } = useHandleAlert();
  const [displayAlert, setDisplayAlert] = useState(alert);

  useEffect(() => {
    let timeOutId;
    if (alert) {
      timeOutId = setTimeout(() => {
        setDisplayAlert(false);
      }, [5000]);
    }
    return () => clearTimeout(timeOutId);
  }, [alert]);

  return (
    <aside
      className={`w-[20rem] h-[5rem] flex  z-[99] rounded-[0.5rem] absolute top-[10%] right-[0%] left-[0%] m-[auto] shadow-[#9f9f9f4d] bg-white shadow-xl drop-shadow-custom gap-[10px] p-[0.4rem] border-2 border-red-300  ${
        displayAlert ? " visible" : "flex"
      }`}
    >
      <div
        className={`w-[100%] h-[100%] border-2 border-blue-300 alert-${status}`}
      >
        <p aria-live="assertive" className="">
          {message}
        </p>
      </div>
      <div
        className="w-max h-max rounded-full flex items-center justify-center bg-red-500 hover:bg-red-600 cursor-pointer p-[0.1rem]"
        onClick={() => setDisplayAlert(alert)}
      >
        <FiX className="text-white " />
      </div>
    </aside>
  );
};

export default Alert;
