const { connection } = require('../database/connection')
const { STRING, ENUM, DATE } = require('sequelize')

const Unidade = connection.define('Unidade', {
    name: {
        type: STRING,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo deve conter entre 2 e 30 caracteres"
            }
        },
        allowNull: false
    },
    address: {
        type: STRING,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo deve conter entre 2 e 30 caracteres"
            }
        },
        allowNull: false
    },
    brand: {
        type: STRING,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo deve conter entre 2 e 30 caracteres"
            }
        },
        allowNull: false
    },
    model: {
        type: STRING,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo deve conter entre 2 e 30 caracteres"
            }
        },
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