const Customer = require("../Model/userSchema");
const Auth = require("../Model/authSchema");
const geolib = require("geolib");
const axios = require("axios");

// Predefined location (your location)
const predefinedLocation = {
  latitude: 6.58724,
  longitude: 3.37149,
};

const addCustomer = async (req, res) => {
  try {
    const { UserId, Name, Number, Email, Address, Notification } = req.body;

    // Check fields
    if (!Name || !Number || !Email || !Address) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await Customer.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({ message: "You said this already!" });
    }

    // Geocode the address using Google Maps Geocoding API
    const geocodingResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        Address
      )}&key=${process.env.GOOGLE_API_KEY}`
    );

    if (geocodingResponse.data.results.length === 0) {
      // throw new Error("Invalid address");
      return res.status(409).json({ message: "Address not found" });
    }

    const position = geocodingResponse.data.results[0].geometry.location;

    const newUser = new Customer({
      UserId,
      Name,
      Number,
      Email,
      Address,
      Location: {
        type: "Point",
        coordinates: [position.lng, position.lat],
      },
      Notification,
    });
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deliveryLocation = async (req, res) => {
  try {
    const user = await Auth.findById(req.params.id);
    console.log("user", user);
    const FindCustomer = await Customer.find({ UserId: user._id });
    console.log("find ", FindCustomer);
    const customersWithDistance = FindCustomer.map((customer) => {
      const customerLocation = {
        latitude: customer.Location.coordinates[1],
        longitude: customer.Location.coordinates[0],
      };
      // console.log(customersWithDistance);
      const distance =
        geolib.getDistance(predefinedLocation, customerLocation) / 1000;
      const customerData = customer.toObject();
      console.log(distance);

      return {
        id: customerData._id,
        UserId: customerData.UserId,
        Name: customerData.Name,
        Number: customerData.Number,
        Email: customerData.Email,
        Address: customerData.Address,
        Location: customerData.Location,
        distance, // Include the calculated distance
      };
    });
    res.status(200).json(customersWithDistance);

    // res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCustomerLocation = async (req, res) => {
  try {
    const Customers = await Customer.find();

    const customersWithDistance = Customers.map((customer) => {
      const customerLocation = {
        latitude: customer.Location.coordinates[1],
        longitude: customer.Location.coordinates[0],
      };
      // console.log(customerLocation);
      const distance =
        geolib.getDistance(predefinedLocation, customerLocation) / 1000;

      const customerData = customer.toObject();
      console.log(customerData);

      return {
        id: customerData._id,
        UserId: customerData.UserId,
        Name: customerData.Name,
        Number: customerData.Number,
        Email: customerData.Email,
        Address: customerData.Address,
        Location: customerData.Location,
        distance, // Include the calculated distance
      };
    });

    res.status(200).json(customersWithDistance);
    // res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { addCustomer, getCustomerLocation, deliveryLocation };
