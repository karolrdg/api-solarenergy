// Uso da biblioteca Sequelize
const { Sequelize } = require('sequelize'); 
// Importação do objeto de acesso ao banco de dados
const databaseConfig = require('../config/database.config.js'); 
// Instância de conexão com o banco de dados utilizando como argumento o objeto de acesso ao banco de dados
const connection = new Sequelize(databaseConfig);
// Expostando a variável de conexão com o banco de dados
module.exports = { connection } 
