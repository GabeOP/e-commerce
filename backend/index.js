//===Import das dependências===//
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const post = require("./controllers/POST");
require('dotenv').config()
const cors = require("cors")
app.use(cors())

//===Para entender o formato JSON===//
app.use(express.json())


//===Rota principal===//
app.get("/", (req, res) => {
  res.json("Rodando")
})

//===Rota de registro de usuário===//
app.post("/cadastro", post)


//===Informações do .env===//
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ad7kia4.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
  app.listen(3000)
  console.log("Conectado ao banco!")
}).catch((err) => console.log(err))