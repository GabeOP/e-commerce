const mongoose = require("mongoose");

//===Informações do .env===//
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


const connectDb = () => {
  mongoose
    .connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ad7kia4.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Conectado ao banco de dados!");
    })
    .catch((err) => console.log(err));
};

module.exports = connectDb;
