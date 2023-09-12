const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database_config');

const connection = new Sequelize(databaseConfig);

module.exports = { connection };