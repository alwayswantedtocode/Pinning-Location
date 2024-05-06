import { useState } from "react";
import useAddGetCustomer from "./useAddGetCustomer";

const useHandleMapInfo = () => {

  const { data } = useAddGetCustomer();
  const [customerInfo, setCustomerInfo] = useState(null);


  const handleActiveWindowsInfo = (pinInfo) => {
    if (pinInfo === customerInfo) {
      return;
    }
    setCustomerInfo(pinInfo);
  };



  return {
    customerInfo,
    setCustomerInfo,
    handleActiveWindowsInfo,
  };
};

export default useHandleMapInfo;
