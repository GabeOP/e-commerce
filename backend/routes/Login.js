
const express = require("express");
const router = express.Router();

const loginController = require("../controllers/LoginController")

router.post("/login", loginController.post)

module.exports = router