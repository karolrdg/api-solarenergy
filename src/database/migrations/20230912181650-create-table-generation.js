"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("generations", {
      created_by:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'unidades'
            },
            key: 'id'
        }
    },
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      reference_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total_generated: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("generations");
  },
};
