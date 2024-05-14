import { useState } from "react";
import axios from "../Axios/axios";
import { useSelector } from "react-redux";

const useAddGetCustomer = () => {
  //Add Customer hook
  const [inputs, setInputs] = useState({});
  const [notification, setNotification] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/location/customers", {
        UserId: currentUser?._id,
        Name: inputs.Name,
        Email: inputs.Email,
        Number: inputs.PhoneNumber,
        Address: inputs.Address,
        Notification: notification,
      });
      console.log(response.data);

      setInputs({
        Name: "",
        Email: "",
        PhoneNumber: "",
        Address: "",
        Notification: false,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  // get customer hook

  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/location/customers");
      // console.log(response.data)
      setErrMsg(false);
      setData(
        response.data.map((customer) => ({
          id: customer.id,
          lat: customer.Location.coordinates[1],
          lng: customer.Location.coordinates[0],
          Name: customer.Name,
          Address: customer.Address,
          Number: customer.Numbers,
          distance: customer.distance,
        }))
      );
    } catch (error) {
      setErrMsg(true);
    }
  };

  const [getData, setGetData] = useState([]);

  const retrieveData = async () => {
    try {
      const response = await axios.get(
        `/api/location/deliverydestination/${currentUser?._id}`
      );
      console.log("riders", response.data);
      setErrMsg(false);
      setGetData(
        response.data.map((customer) => ({
          userId: customer.id,
          lat: customer.Location.coordinates[1],
          lng: customer.Location.coordinates[0],
          Name: customer.Name,
          Address: customer.Address,
          Number: customer.Numbers,
          distance: customer.distance,
        }))
      );
    } catch (error) {
      setErrMsg(true);
    }
  };

  return {
    inputs,
    setInputs,
    notification,
    setNotification,
    handleSubmit,
    data,
    setData,
    getData,
    setGetData,
    errMsg,
    setErrMsg,
    fetchData,
    retrieveData,
  };
};

export default useAddGetCustomer;
