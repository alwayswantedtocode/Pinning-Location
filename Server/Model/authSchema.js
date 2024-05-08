const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema(
  {
    Username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    Email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    Password: {
      type: String,
      require: true,
      min: 6,
    },

  },
  { timestamps: true }
);

const authData = mongoose.model("authData", authSchema);
module.exports = authData;
