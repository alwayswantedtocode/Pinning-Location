import { useState,  } from 'react'
import axios from '../Axios/axios';

const useAddGetCustomer = () => {
  //Add Customer hook
  const [inputs, setInputs] = useState({});
    const [notification, setNotification] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("/api/location/customers", {
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
      setErrMsg(false);
      setData(
        response.data.map((customer) => ({
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
    errMsg,
    setErrMsg,
    fetchData,
  };
    
  
}

export default useAddGetCustomer;