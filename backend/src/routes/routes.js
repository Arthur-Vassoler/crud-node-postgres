const express = require('express');
const PropertieController = require('../controllers/PropertieController');
const SaleController = require('../controllers/SaleController');

const routes = express.Router();

//Properties
routes.get('/properties', PropertieController.index);
routes.get('/properties/:propertie_id', PropertieController.findPropertie);
routes.post('/properties', PropertieController.store);
routes.delete('/properties/:propertie_id', PropertieController.delete);
routes.put('/properties/:propertie_id', PropertieController.update);

//Sales
routes.get('/properties/:propertie_id/sales', SaleController.index);
routes.post('/properties/:propertie_id/sales', SaleController.store);
routes.delete('/properties/:propertie_id/sales', SaleController.delete);
routes.put('/properties/:propertie_id/sales', SaleController.update);

module.exports = routes;