const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const customerRouters = require("./Router/userRouter");
const authRouters =require("./Router/authRouters")

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5010;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/usersauth", authRouters);
app.use("/api/location", customerRouters);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

startServer();
