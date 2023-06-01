const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
  deleteUser,
  getUser,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
router.delete("/delete/:id", deleteUser);
router.get("/:id", getUser);

module.exports = router;
