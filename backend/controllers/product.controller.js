const Produto = require("../models/Produto");

module.exports = {
  get: async (req, res) => {
    const resposta = await Produto.find();
    return res.status(200).json(resposta);
  },

  post: async (req, res) => {
    const { nome, preco, descricao } = req.body;

    //Verifica no banco de dados se já existe um produto cadastrado com o mesmo nome
    const productExists = await Produto.findOne({ nome: nome });
    if (productExists) {
      return res.status(422).json({
        msg: "Produto com um nome idêntico já cadastrado. Tente novamente!",
      });
    }

    //Instancia o produto
    const produto = new Produto({ nome, preco, descricao });

    try {
      produto.save();
      res.status(200).json({ msg: "Produto cadastrado com sucesso!" });
    } catch (err) {
      res.status(500).json({ msg: "Ocorreu um erro." });
    }
  },
};
