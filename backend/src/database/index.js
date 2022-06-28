const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Propertie = require('../models/Propertie');
const Sale = require('../models/Sale');

const connection = new Sequelize(dbConfig);

Propertie.init(connection);
Sale.init(connection);

Propertie.associate(connection.models);
Sale.associate(connection.models);

module.exports = connection;