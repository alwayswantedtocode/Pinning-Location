import axios from "axios";

export default axios.create({
  baseURL: "https://lara-pastry-server.onrender.com",
  // baseURL: "http://localhost:5010",
});

