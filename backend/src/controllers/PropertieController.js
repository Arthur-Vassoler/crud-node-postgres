const { update } = require('../models/Propertie');
const Propertie = require('../models/Propertie');

module.exports = {
  async index(req, res) {
    const propertie = await Propertie.findAll();

    return res.json(propertie);
  },

  async store(req, res) {
    const { address, title, type, bedrooms, suites, description } = req.body;

    const propertie = await Propertie.create({
      address,
      title,
      type,
      bedrooms,
      suites,
      description });

    return res.json(propertie);
  },

  async delete(req, res) {
    const { propertie_id } = req.params;

    const propertie = await Propertie.destroy({
      where: {id: propertie_id }
    });

    return res.json(propertie);
  },

  async update(req, res) {
    const { propertie_id } = req.params;
    const { address, title, type, bedrooms, suites, description } = req.body;

    const propertie = await Propertie.update({ 
      address: address,
      title: title,
      type: type,
      bedrooms: bedrooms,
      suites: suites,
      description: description},{
      where: {id: propertie_id }
    });

    return res.json(propertie);
  }
};