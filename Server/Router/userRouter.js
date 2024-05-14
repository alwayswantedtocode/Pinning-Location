const customerRouter = require("express").Router();
const {
  addCustomer,
  getCustomerLocation,
  deliveryLocation,
} = require("../Controller/userControllers");

customerRouter.post("/customers", addCustomer);
customerRouter.get("/customers", getCustomerLocation);
customerRouter.get("/deliverydestination/:id", deliveryLocation);

module.exports = customerRouter;