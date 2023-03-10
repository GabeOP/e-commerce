const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  post: async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(422).json({ msg: "Insira todos os dados." });
    }

    const usuarioExiste = await User.findOne({ email: email });
    if (!usuarioExiste) {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }

    const checaSenha = await bcrypt.compare(senha, usuarioExiste.senha);

    if (!checaSenha) {
      return res.status(422).json({ msg: "Senha inválida" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: usuarioExiste._id,
        },
        secret
      );

      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      res.status(500).json({ msg: "Ocorreu um erro intero." });
    }
  },
};
