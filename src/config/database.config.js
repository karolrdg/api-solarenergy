const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  dialect: process.env.DB_DIALECT, 
  host: process.env.DB_HOST, 
  username: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT || 5000,
  define: { // O objeto define serve para colocarmos configurações de conexão auxiliares
    underscored: true, //Traduz os campos para snake_case
    underscoredAll: true //Traduz todos os campos para snake_case
  }
};