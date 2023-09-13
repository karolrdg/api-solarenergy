const { STRING, DATE } = require('sequelize')
const { connection } = require('../database/connection')

const Users = connection.define("users", {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            len: { args: [2, 20],
                   msg: 'O nome deve possuir entre 2 e 20 caracteres' },
            notNull: {msg: "O campo name é obrigatório."}
        },
        get() {
          return this.getDataValue('name');
        },
        set(value) {
          if (value) {
              this.setDataValue('name', value.toLowerCase());
          }
        },
    },
    email: {
        type: STRING,
        allowNull: false,
        readOnly: {msg:"Email não pode ser alterado."},
        validate:{
          isEmail: { msg: "Email Invalido" },
          notNull: { msg: "O campo email é obrigatório" }
        },
        unique: {msg:"Email já está cadastrado."},
        get() {
          return this.getDataValue('email');
        },
        set(value) {
          if (value) {
              this.setDataValue('email', value.toLowerCase());
          }
        },
    },
    password: {
        type: STRING,
        allowNull: false,
        validate:{
            is: {
                args: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$",
                msg: "Deve ter no mínimo 8 caracteres, mínimo 1 letra maiúscula, mínimo 1 número e mínimo 1 caracteres especial"
                },
            notNull: {msg: {"msg":"O campo password é obrigatório.", "status":"400"}}    
        }
    },
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE,
    },
    {
    underscored: true,
    paranoid: true
    });

module.exports = { Users }