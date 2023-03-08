const User = require("../models/User");

module.exports = {
  //===Método GET===//
  get: async (req, res) => {
    const resposta = await User.find();
    res.json(resposta);
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

    const user = new User({
      nome,
      email,
      senha,
    });

    try {
      user.save();
      res.status(200).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Ocorreu um erro. Tente novamente mais tarde." });
    }
  },

  delete: async(req, res) =>{
    const { _id } = req.params;
    await User.deleteOne({_id: _id})
    res.status(200).json({msg: "Usuário DELETADO com sucesso!"})
  }
};
