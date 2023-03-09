const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", {
  nome: String,
  preco: String,
  descricao: String
})

module.exports = Produto