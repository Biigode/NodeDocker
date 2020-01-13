const cliente = require("../models/cliente");
module.exports = {
  async store(req, res) {
    try {
      var usuario = {
        Nome: req.body.nome,
        Idade: req.body.idade,
        Profissao: req.body.profissao
      };
      const response = await cliente.create(usuario);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async show(req, res) {
    try {
      const response = await cliente.find({});
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
