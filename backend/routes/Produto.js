const express = require("express");
const router = express.Router();

const createProduct = require("../controllers/createProduct");
const validateProduct = require("../middlewares/validateProduct");

router.get("/produto", createProduct.get)
router.post("/cadastroProduto", validateProduct, createProduct.post)


module.exports = router