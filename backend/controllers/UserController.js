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

    //usa o bcrypt
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt)

    const user = new User({
      nome,
      email,
      senha: passwordHash,
    });

    try {
      await user.save();
      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Ocorreu um erro. Tente novamente mais tarde." });
    }
  },

  //===Método DELETE===/
  // delete: async(req, res) =>{
  //   const { _id } = req.params;
  //   await User.deleteOne({_id: _id})
  //   res.status(200).json({msg: "Usuário DELETADO com sucesso!"})
  // },

  //===Método PATCH===/
  // patch: async(req, res) =>{
  //   const { _id } = req.params;
  //   const { nome, email, senha, confirmaSenha} = req.body;
  // }
};
