
const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login.controller")

router.post("/login", loginController.post)

module.exports = router