//===Import das dependências===//
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()

//===CORS===//
const cors = require("cors")
app.use(cors())


//===Para entender o formato JSON===//
app.use(express.json())


//===Rotas usuarios===//
const userRoute = require("./routes/User")
app.use("/", userRoute)


//===Rotas Produtos ===//
const produtoRoute = require("./routes/Produto");
app.use("/", produtoRoute)

//==Rota Login==//
app.post("/login", async(req, res)=>{
  const {email, senha} = req.body;
  const User = require("./models/User")


  if(!email || !senha){
    return res.status(422).json({msg: "Insira todos os dados."})
  }

  const usuarioExiste = await User.findOne({email: email})
  if(!usuarioExiste){
    return res.status(404).json({msg: "Usuário não encontrado."})
  }
  
  const checaSenha = await bcrypt.compare(senha, usuarioExiste.senha)

  if(!checaSenha){
    return res.status(422).json({msg: "Senha inválida"})
  }

  try {
    
    const secret = process.env.SECRET

    const token = jwt.sign({
      id: usuarioExiste._id
    }, secret)

    res.status(200).json({msg: "Autenticação realizada com sucesso!", token})

  } catch (error) {
    res.status(500).json({msg: "Ocorreu um erro intero."})
  }
})

//===Informações do .env===//
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ad7kia4.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
  app.listen(3000)
  console.log("Conectado ao banco!")
}).catch((err) => console.log(err))