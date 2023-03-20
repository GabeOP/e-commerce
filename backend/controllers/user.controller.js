const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  //===Método GET===//
  get: async (req, res) => {
    const resposta = await User.find();
    return res.status(200).json(resposta);
  },

  //===Método POST===//
  post: async (req, res) => {
    const { nome, email, senha } = req.body;

    //Verifica no banco de dados se o email do usuário já existe
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ msg: "E-mail já cadastrado." });
    }

    //usa o bcrypt para encriptar senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt);

    //Instancia o usuário
    const user = new User({ nome, email, senha: passwordHash });

    try {
      await user.save();
      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Ocorreu um erro. Tente novamente mais tarde." });
    }
  },
};
