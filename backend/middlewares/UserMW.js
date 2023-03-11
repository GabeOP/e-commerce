const User = require("../models/User");

const UserMW = async(req, res, next) => {
  const { nome, email, senha, confirmaSenha } = req.body;

  if (!nome || !email || !senha || !confirmaSenha) {
    return res.status(422).json({ msg: "Preencha todos os campos." });
  }

  if (confirmaSenha !== senha) {
    return res.status(422).json({ msg: "As senhas devem ser iguais." });
  }

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(422).json({ msg: "E-mail já cadastrado." });
  }

  next();
}

module.exports = UserMW;