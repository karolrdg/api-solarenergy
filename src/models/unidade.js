const { connection } = require('../database/connection')
const { STRING, ENUM, DATE } = require('sequelize');

const Unidade = connection.define('Unidade', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo name deve conter entre 2 e 30 caracteres"
            },
            notNull: { msg: "O campo name é obrigatório" }
        },
        get() {
            return this.getDataValue('name');
        },
        set(value) {
            if (value) {
                this.setDataValue('name', value.toLowerCase());
            }
        }
    },
    address: {
        type: STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo address deve conter entre 2 e 30 caracteres"
            },
            notNull: { msg: "O campo address é obrigatório" }
        },
        get() {
            return this.getDataValue('address');
        },
        set(value) {
            if (value) {
                this.setDataValue('address', value.toLowerCase());
            }
        }
    },
    brand: {
        type: STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo brand deve conter entre 2 e 30 caracteres"
            },
            notNull: { msg: "O campo brand é obrigatório" }
        },
        get() {
            return this.getDataValue('brand');
        },
        set(value) {
            if (value) {
                this.setDataValue('brand', value.toLowerCase());
            }
        }
    },
    model: {
        type: STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "O campo model deve conter entre 2 e 30 caracteres"
            },
            notNull: { msg: "O campo model é obrigatório" }
        },
        get() {
            return this.getDataValue('model');
        },
        set(value) {
            if (value) {
                this.setDataValue('model', value.toLowerCase());
            }
        }
    },
    active: {
        type: ENUM('Ativo', 'Inativo'),
        allowNull: false,
        validate: {
            isIn: {
                args: [['Ativo', 'Inativo']],
                msg: "Somente são aceito os valores 'Ativo' e 'Inativo'"
            }
        }
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