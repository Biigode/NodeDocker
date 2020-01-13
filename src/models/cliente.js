const mongoose = require("mongoose");
const ClienteSchema = new mongoose.Schema({
  Nome: String,
  Idade: Number,
  Profissao: String
});
module.exports = mongoose.model("Cliente", ClienteSchema);
