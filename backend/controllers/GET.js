const Users = require("../models/User")

const get = async(req, res) => {
  const resposta = await Users.find()
  res.json(resposta)
}

module.exports = get