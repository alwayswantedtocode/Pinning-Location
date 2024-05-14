import React, { useRef,useContext } from "react";

const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const dropDownRef = useRef(null);
   const closeinfowindowRef = useRef(null);

  return (
    <GlobalContext.Provider
      value={{
        dropDownRef,
        closeinfowindowRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
