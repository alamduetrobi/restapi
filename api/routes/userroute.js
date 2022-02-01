const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/userController");

router.post("/login", usercontroller.loginConroller);

router.post("/register", usercontroller.registerController);

router.get("/", usercontroller.getAlluer);

module.exports = router;
