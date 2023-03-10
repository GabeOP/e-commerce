//===Import das dependências===//
const express = require("express");
const app = express();
const mongoose = require("mongoose");

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
const loginRoute = require("./routes/Login")
app.use("/", loginRoute)

//===Informações do .env===//
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ad7kia4.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
  app.listen(3000)
  console.log("Conectado ao banco!")
}).catch((err) => console.log(err))