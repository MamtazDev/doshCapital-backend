const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
// router.delete("/delete/:id");
// router.get("/:id");

module.exports = router;
