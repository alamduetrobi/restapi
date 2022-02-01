const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");

const usercontroller = require("../controllers/userController");

router.post("/login", usercontroller.loginConroller);

router.post("/register", usercontroller.registerController);

router.get("/", authenticate, usercontroller.getAlluer);

module.exports = router;
