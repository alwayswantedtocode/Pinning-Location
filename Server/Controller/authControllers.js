const Auth = require("../Model/authSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const register = async (req, res) => {
  try {
    const { Username, Email, Password } = req.body;
    // Extract domain from email address
    const domain = Email.split("@")[1];

    // Check if the email domain matches the regex pattern
    if (!domainPattern.test(domain)) {
      return res.status(400).json({ message: "Invalid email domain format" });
    }
    // Check if the user already exists
    const existingUser = await Auth.findOne({
      //   $or: [{ email: req.body.email }, { username: req.body.username }],
      Email: req.body.Email,
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username or Email already exists" });
    }
    //generate hashed pasword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    //create new users
    const newUser = new Auth({
      Username,
      Email,
      Password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    // const {username, password, email}=req.body
    const user = await Auth.findOne({ Email: req.body.Email });
    if (!user) {
      console.log("I couldnt find a user");
      return res.status(404).json("User not found");
    }

    const validPassword = await bcrypt.compare(
      req.body.Password,
      user.Password
    );
    if (!validPassword) {
      return res.status(400).json("Wrong username or password");
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN, {
      expiresIn: "2d",
    });

    const { password, isAdmin, ...otherDetails } = user._doc;
    const accessTokenLimits = new Date(Date.now() + 7200000);
    const refreshTokenLimits = new Date(Date.now() + 172800000);
    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        expires: accessTokenLimits,
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        expires: refreshTokenLimits,
      })
      .status(201)
      .json({ ...otherDetails, accessToken, refreshToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout failed:", error);
    res.status(500).json({ message: "Logout failed" });
  }
};

module.exports = { register, login, logout };
