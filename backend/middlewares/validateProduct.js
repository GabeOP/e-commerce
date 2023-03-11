const validateProduct = async(req, res, next) =>{
    const {nome, preco, descricao} = req.body;
    
  if(!nome || !preco|| !descricao){
    return res.status(422).json({msg:"Preencha todos os campos."})
  }

  next();
}

module.exports = validateProduct;

