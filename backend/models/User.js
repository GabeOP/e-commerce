const mongoose = require("mongoose");

const User = mongoose.model("Usuario", {
  nome: String,
  email: String,
  senha: String
})

module.exports = User