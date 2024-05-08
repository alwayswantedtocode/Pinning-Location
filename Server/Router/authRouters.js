const authRouters = require("express").Router();
const {
  register,
  login,
  logout,
} = require("../Controller/authControllers");

authRouters.post("/register", register);
authRouters.post("/signin", login);
authRouters.post("/logout", logout);

module.exports = authRouters;
