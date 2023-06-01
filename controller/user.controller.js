const User = require("../models/User.Model");
const bcrcypt = require("bcryptjs");
const { genearteToken } = require("../utils/auth");

const registerUser = async (req, res) => {
  try {
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      return res.status(403).send({
        message: `${req.body.email} is already exist!`,
        status: 403,
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrcypt.hashSync(req.body.password),
      });

      const user = await newUser.save();
      const accessToken = await genearteToken(user);

      res.status(200).send({
        message: "User Created successfully",
        user,
        accessToken,
        status: 200,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && bcrcypt.compareSync(req.body.password, user.password)) {
      const accessToken = await genearteToken(user);

      return res.status(200).send({
        message: "Logged in successfully",
        user,
        accessToken,
        status: 200,
      });
    } else {
      res.status(401).send({
        message: "Invalid user or password",
        status: 401,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};