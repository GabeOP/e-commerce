const Produto = require("../models/Produto")

module.exports = {

  get: async(req, res)=>{
    const resposta = await Produto.find();
    return res.status(200).json(resposta);
  },

  post: async(req, res)=>{
    const {nome, preco, descricao} = req.body;
  
    const produto = new Produto({nome, preco, descricao})
  
    try{
      produto.save()
      res.json({msg: "Produto cadastrado com sucesso!"})
    }catch(err){
      res.json({msg: "Ocorreu um erro."})
    }
  }
}