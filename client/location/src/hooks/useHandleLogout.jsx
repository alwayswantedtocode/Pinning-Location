import { useState } from "react";
import axios from "../Axios/axios";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Global Context/useContext";

const useHandleLogout = () => {
  const { dropDownRef } = useGlobalContext();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);

  // Handling dropDown
  const handleDropDown = () => {
    const onClickIcon = showDropdown;
    setShowDropdown(onClickIcon);
    if (onClickIcon) {
      const iconElement = document.getElementById("user-icon");
      const dropDownElement = document.getElementById("drop-down");

      const iconRect = iconElement.getBoundingClientRect("user-icon");
      const dropDownRect = dropDownElement.getBoundingClientRect("drop-down");

      const center = (iconRect.right + iconRect.left) / 2 - dropDownRect / 2;
      const bottom = iconRect.bottom - dropDownRect.height;

      dropDownElement.style.left = `${center}px`;
      dropDownElement.style.bottom = `${bottom}px`;
    }
    setShowDropdown(onClickIcon);
    setShowDropdown(!showDropdown);
  };

  const handleCloseDropDown = (e) => {
    e.stopPropagation();
    if (!dropDownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  //LogOut

  const LogOut = async () => {
    console.log("enter");
    try {
      const response = await axios.post("/api/usersauth/logout");
      console.log(response.data);
      dispatch(setLogout());
      if (!currentUser) {
        navigate("/Login");
      }
    } catch (error) {}
  };

  return {
    showDropdown,
    setShowDropdown,
    handleDropDown,
    handleCloseDropDown,

    LogOut,
  };
};

export default useHandleLogout;
