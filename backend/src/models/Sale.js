const { Model, DataTypes } = require('sequelize');

class Sale extends Model {
  static init(sequelize) {
    super.init({
      price: DataTypes.INTEGER,
    }, { sequelize })
  }

  static associate(models) {
    this.belongsTo(models.Propertie, {
      foreignKey: 'propertie_id',
      as: 'propertie'
    });
  }
}

module.exports = Sale;