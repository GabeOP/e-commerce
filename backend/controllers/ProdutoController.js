const Produto = require("../models/Produto")

module.exports = {

  get: async(req, res)=>{
    const resposta = await Produto.find();
    return res.status(200).json(resposta);
  },

  post: async(req, res)=>{
    const {nome, preco, descricao} = req.body;
  
    if(!nome || !preco|| !descricao){
      return res.status(422).json({msg:"Preencha todos os campos."})
    }

    const productExists = await Produto.findOne({nome: nome})
    if(productExists){
      return res.status(422).json({msg: "Produto com um nome idêntico já cadastrado. Tente novamente!"})
    }

    const produto = new Produto({nome, preco, descricao})
  
    try{
      produto.save()
      res.status(200).json({msg: "Produto cadastrado com sucesso!"})
    }catch(err){
      res.status(500).json({msg: "Ocorreu um erro."})
    }
  }
}