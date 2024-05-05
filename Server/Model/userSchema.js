const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {
    type: String,
    Required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  Number: {
    type: String,
    Require: true,
    min: 10,
    max: 15,
  },
  Email: {
    type: String,
    require: true,
    max: 50,
    unique: true,
  },
  Address: {
    type: String,
    Required: true,
    unique: true,
    min: 3,
    max: 300,
  },
  Location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  Notification: {
    notification: {
      type: Boolean,
      default: false,
    },
  },
});

const userData = mongoose.model("userData", userSchema);
module.exports = userData;
