const express = require("express");
const { registerUser } = require("../controller/user.controller");

const router = express.Router();

router.post("/signup", registerUser);
// router.post("login");
// router.get("/");
// router.delete("/delete/:id");
// router.get("/:id");

module.exports = router;
