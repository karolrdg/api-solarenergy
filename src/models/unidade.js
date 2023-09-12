const { connection } = require('../database/connection')
const { STRING, INTEGER, ENUM, DATE } = require('sequelize')

const Unidade = connection.define('Unidade', {
    name: {
        type: STRING,
        allowNull: false
    },
    address: {
        type: STRING,
        allowNull: false
    },
    brand: {
        type: STRING,
        allowNull: false
    },
    model: {
        type: STRING,
        allowNull: false
    },
    active: {
        type: ENUM('Ativo', 'Inativo'),
        allowNull: false
    },
    createdAt: {
        type: DATE,
        allowNull: false
    },
    updatedAt: {
        type: DATE,
        allowNull: false
    },
    deletedAt: {
        type: DATE,
        allowNull: true
    }
},
    { underscored: true, paranoid: true });

module.exports = { Unidade };