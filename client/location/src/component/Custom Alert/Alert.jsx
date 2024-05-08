import React, { useEffect, useState } from "react";
import useHandleAlert from "../../hooks/useHandleAlert";

const Alert = ({ show, status, message, isVisible }) => {
  const { alert } = useHandleAlert();
  const [displayAlert, setDisplayAlert] = useState(isVisible);

  useEffect(() => {
    let timeOutId;
    if (isVisible) {
      timeOutId = setTimeout(() => {
        setDisplayAlert(false);
      }, [5000]);
    }
    return () => clearTimeout(timeOutId);
  },[isVisible]);

  return (
    <aside
      className={`z-[99] ${
        displayAlert
          ? "w-[20rem] h-[7rem] rounded-[0.4rem] absolute top-[1%] right-[0%] left-[0%] m-[auto] shadow-[#9f9f9f4d] bg-slate-100"
          : "hidden"
      }`}
    >
      <div
        className={`${
          alert.show
            ? "w-[100%] h-[100%] font-semibold flex items-center justify-center p-[0.5rem] mb-[0.5rem] text-red-600"
            : "w-[100%] h-[100%] font-semibold flex items-center justify-center p-[0.5rem] mb-[0.5rem] text-green-600"
        }`}
      >
        <p className="">{message}</p>
      </div>
    </aside>
  );
};

export default Alert;
