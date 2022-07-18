'use strict';

/**
 * @param {import('sequelize').queryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};
