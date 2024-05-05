const customerRouter = require("express").Router();
const { addCustomer, getCustomerLocation, SearchCustomerLocation } = require("../Controller/userControllers")

customerRouter.post("/customers", addCustomer);
customerRouter.get("/customers", getCustomerLocation);
customerRouter.get("/search/customers", SearchCustomerLocation);

module.exports = customerRouter;