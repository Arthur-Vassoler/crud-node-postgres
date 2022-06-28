'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedrooms: Sequelize.INTEGER,
      suites: Sequelize.INTEGER,
      description: Sequelize.STRING,
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('properties');
  }
};
