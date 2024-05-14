import { useState, useEffect } from "react";
import useHandleAlert from "./useHandleAlert";
import axios from "../Axios/axios";
import { loginStart, loginSuccess, loginFailure } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const USER_REGX = /^[a-zA-Z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,24}$/;

const EMAIL_REGX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const useAuth = (Username, Email, Password) => {
  //redux and custom hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setAlert, showAlert } = useHandleAlert();

  //Alert function

  //Auth states
  const [inputs, setInputs] = useState({});
  const [login, setLogin] = useState({});

  //Auth onChange
  const handleOnchange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleLoginOnchange = (name, value) => {
    setLogin({ ...login, [name]: value });
  };

  // Validation of username, email and password
  const [validRegName, setValidRegName] = useState(false);
  const [validRegEmail, setValidRegEmail] = useState(false);
  const [validRegPassword, setValidRegPassword] = useState(false);

  const [validLogEmail, setValidLogEmail] = useState(false);
  const [validLogPassword, setValidLogPassword] = useState(false);

  const [focusReg, setFocusReg] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  //Register
  useEffect(() => {
    const test = USER_REGX.test(inputs.Username);
    setValidRegName(test);
  }, [inputs.Username]);

  useEffect(() => {
    const test = EMAIL_REGX.test(inputs.Email);
    setValidRegEmail(test);
  }, [inputs.Email]);

  useEffect(() => {
    const test = PWD_REGX.test(inputs.Password);
    setValidRegPassword(test);
  }, [inputs.Password]);

  //Login
  useEffect(() => {
    const test = EMAIL_REGX.test(login.Email);
    setValidLogEmail(test);
  }, [login.Email]);

  useEffect(() => {
    const test = PWD_REGX.test(login.Password);
    setValidLogPassword(test);
  }, [login.Password]);

  const handleFocus = () => {
    setFocusReg(!focusReg);
  };

  // submit Register and Login details
  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const v1 = USER_REGX.test(inputs.Username);
    const v2 = EMAIL_REGX.test(inputs.Email);
    const v3 = PWD_REGX.test(inputs.Password);
    if (!v1 || !v2 || !v3) {
      setIsloading(false);
      showAlert(true, "danger", "Invalid input");
    }
    try {
      await axios.post(
        "/api/usersauth/register",
        {
          Username: inputs.Username,
          Email: inputs.Email,
          Password: inputs.Password,
        }
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true,
        // }
      );

      setInputs({
        Username: "",
        Email: "",
        Password: "",
      });
      navigate("/");
      setIsloading(false);
      showAlert(true, "success", "You have successfully created an account");
    } catch (error) {
      setIsloading(false);
      if (!error?.response) {
        showAlert(true, "danger", "Something went wrong with the Server");
      } else if (error.response?.status === 400) {
        showAlert(true, "danger", "Invalid email domain format");
      } else if (error.response?.status === 409) {
        showAlert(true, "danger", "Username or Email already exists");
      } else {
        showAlert(true, "danger", "Your Registration failed");
      }
    }
  };
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    dispatch(loginStart());
    const v1 = EMAIL_REGX.test(login.Email);
    const v2 = PWD_REGX.test(login.Password);
    if (!v1 || !v2) {
      setIsloading(false);
      showAlert(true, "danger", "Invalid input");
    }

    try {
      const response = await axios.post(
        "/api/usersauth/signin",
        { Email: login.Email, Password: login.Password }
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true,
        // }
      );
      dispatch(loginSuccess(response.data));
      setLogin({
        Email: "",
        Passowrd: "",
      });
      navigate("/");
      setIsloading(false);
      showAlert(true, "success", "You have successfully created an account");
    } catch (error) {
      setIsloading(false);
      if (!error?.response) {
        console.log(error.response);
        showAlert(true, "danger", "Something went wrong with the Server");
      } else if (error.response?.status === 404) {
        showAlert(true, "danger", "This user does not exist");
      } else if (error.response?.status === 400) {
        showAlert(true, "danger", "Wrong username or password");
      } else {
        showAlert(true, "danger", "Login failed");
      }
    }
  };

  return {
    handleOnchange,
    inputs,
    setInputs,
    login,
    setLogin,
    handleLoginOnchange,
    validRegName,
    validRegEmail,
    validRegPassword,
    validLogEmail,
    validLogPassword,
    onRegisterSubmit,
    onLoginSubmit,
    handleFocus,
    focusReg,
    isLoading,
  };
};

export default useAuth;
