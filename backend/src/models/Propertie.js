const { Model, DataTypes } = require('sequelize');

class Propertie extends Model {
  static init(sequelize) {
    super.init({
      address: DataTypes.STRING,
      title: DataTypes.STRING,
      type: DataTypes.INTEGER,
      bedrooms: DataTypes.INTEGER,
      suites: DataTypes.INTEGER,
      description: DataTypes.STRING
    }, { sequelize })
  }

  static associate(models) {
    this.hasMany(models.Sale, {
      foreignKey: 'propertie_id',
      as: 'sales'
    });
  }
}

module.exports = Propertie;