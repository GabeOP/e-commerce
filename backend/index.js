//===Import das dependências===//
const express = require("express");
const app = express();


require('dotenv').config()

//===CORS===//
const cors = require("cors")
app.use(cors())


//===Para entender o formato JSON===//
app.use(express.json())


//Rota PRIVADA
const User = require("./models/User");

app.get("/usuario/:id", checaToken, async(req,res)=>{

  const id = req.params.id

  const user = await User.findById(id, '-senha')

  if(!user){
    return res.status(404).json({msg: "Usuário não encontrado"})
  }

  res.status(200).json(user)
})

//Para checar token

const jwt = require("jsonwebtoken")

function checaToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if(!token) {
    return res.status(401).json({msg: "Acesso negado"})
  }

  try {
    const secret = process.env.SECRET
    jwt.verify(token, secret)
    next()
  } catch (error) {
    res.status(400).json({msg: "Token inválido"})
  }
}

//===Rotas usuarios===//
const userRoute = require("./routes/user.route")
app.use("/", userRoute)


//===Rotas Produtos ===//
const produtoRoute = require("./routes/product.route");
app.use("/", produtoRoute)

//==Rota Login==//
const loginRoute = require("./routes/login.route")
app.use("/", loginRoute)

//Conexão com o banco de dados
const connectDb = require("./database/db");
connectDb();

const PORT = 3000;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))
