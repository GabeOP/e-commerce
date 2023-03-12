//===Import das dependências===//
const express = require("express");
const app = express();


require('dotenv').config()

//===CORS===//
const cors = require("cors")
app.use(cors())


//===Para entender o formato JSON===//
app.use(express.json())


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
const connectDb = require("./database/db")
connectDb();

const PORT = 3000;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))
