import axios from "axios";

export default axios.create({
  baseURL: "https://lara-pastry.onrender.com",
  // baseURL: "http://localhost:5010",
});

//  "proxy": "https://share-x-server.onrender.com"
