const Propertie = require('../models/Propertie');
const Sale = require('../models/Sale');

module.exports = {
  async index(req, res) {
    const { propertie_id } = req.params;

    const propertie = await Propertie.findByPk(propertie_id, {
      include: { association: 'sales' }
    });

    return res.json(propertie.sales);
  },

  async store(req, res) {
    const { propertie_id } = req.params;
    const { price } = req.body;

    const propertie = await Propertie.findByPk(propertie_id);

    if (!propertie)
      return res.status(400).json({ error: 'Propertie not found' });

    const sale = await Sale.create({ price, propertie_id });

    return res.json(sale);
  },

  async delete(req, res) {
    const { propertie_id } = req.params;

    const sale = await Sale.destroy({
      where: { propertie_id: propertie_id }
    });

    return res.json(sale);
  },

  async update(req, res) {
    const { propertie_id } = req.params;
    const { price } = req.body;

    const sale = await Sale.update({ 
      price: price
    }, {
      where: {propertie_id: propertie_id }
    });

    return res.json(sale);
  }
};