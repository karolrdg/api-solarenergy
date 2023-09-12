const { Sequelize } = require('sequelize'); // Uso da biblioteca Sequelize
const databaseConfig = require('../config/database.config'); // Importação do objeto de acesso ao banco de dados

const connection = new Sequelize(databaseConfig) // Instância de conexão com o banco de dados utilizando como argumento o objeto de acesso ao banco de dados

module.exports = { connection } // Exportação da conexão com o banco de dados