import { useState } from "react";
import useAddGetCustomer from "./useAddGetCustomer";
import { useGlobalContext } from "../Global Context/useContext";

const useHandleMapInfo = () => {
  const { closeinfowindowRef } = useGlobalContext;
  const [customerInfo, setCustomerInfo] = useState(null);

  const handleActiveWindowsInfo = (pinInfo) => {
    if (pinInfo === customerInfo) {
      return;
    }
    setCustomerInfo(pinInfo);
  };

  const handleCloseWindowInfo = (e) => {
    if (!closeinfowindowRef.current.contains(e.target)) {
      setCustomerInfo(null);
    }
  };

  return {
    customerInfo,
    setCustomerInfo,
    handleActiveWindowsInfo,
    handleCloseWindowInfo,
  };
};

export default useHandleMapInfo;
