const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");
const UserMW = require("../middlewares/UserMW");

router.get("/usuario", userController.get)
router.post("/cadastroUsuario", UserMW, userController.post)
// app.patch("/:_id", Controller)
// app.delete("/:_id", Controller.delete)

module.exports = router