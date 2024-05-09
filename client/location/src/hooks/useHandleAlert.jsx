import { useState } from "react";

const useHandleAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    status: "",
    message: "",
  });

  const showAlert = (show = false, status = "", message = "") => {
    setAlert({ show, status, message });
  };
  return {
    alert,
    setAlert,
    showAlert,
  };
};

export default useHandleAlert;
