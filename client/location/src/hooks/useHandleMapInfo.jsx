import { useState, useEffect, useRef } from "react";

const useHandleMapInfo = () => {
  const closeinfowindowRef = useRef();
  const [customerInfo, setCustomerInfo] = useState([]);

  const handleIcons = (index) => {
    const updatedOnClickIcon = customerInfo.map((clicked, i) =>
      i === index ? !clicked : false
    );
    setCustomerInfo(updatedOnClickIcon);
  };

  const closeMapInfo = (e) => {
    if (!closeinfowindowRef.current.contains(e.target)) {
      setCustomerInfo(customerInfo.map(() => false)); // Close all InfoWindows
    }
  };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeMapInfo);
//     return () => {
//       document.removeEventListener("mousedown", closeMapInfo);
//     };
//   }, []);
    
    return {
      customerInfo,
      setCustomerInfo,
      handleIcons,
      closeinfowindowRef,
      closeMapInfo,
    };
};

export default useHandleMapInfo;
