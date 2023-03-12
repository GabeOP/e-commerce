const express = require("express");
const router = express.Router();

const createUser = require("../controllers/user.controller");
const validateUser = require("../middlewares/validateUser");

router.get("/usuario", createUser.get)
router.post("/cadastroUsuario", validateUser, createUser.post)
// app.patch("/:_id", Controller)
// app.delete("/:_id", Controller.delete)

module.exports = router