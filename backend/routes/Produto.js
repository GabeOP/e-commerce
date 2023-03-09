const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/ProdutoController")

router.get("/produto", produtoController.get)
router.post("/cadastroProduto", produtoController.post)


module.exports = router