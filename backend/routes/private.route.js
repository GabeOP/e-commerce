const express = require("express");
const router = express.Router();
const privateController = require("../controllers/private.controller")
const checaToken = require("../middlewares/checaToken")

router.get("/usuario/:id", checaToken, privateController.get)

module.exports = router