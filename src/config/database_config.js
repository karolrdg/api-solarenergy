// Importação de módulo para uso de arquivos .env
const { config } = require('dotenv');
config();

const { DB_DIALECT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, SECRET_KEY } = process.env;

module.exports = {

    dialect: DB_DIALECT,       // Recebe o tipo de banco de dados usado
    host: DB_HOST,             // Recebe qual servidor está sendo usado
    username: DB_USER,   // Nome do usuário no Postgres
    password: DB_PASSWORD,   // Senha do usuário no Postgres
    database: DB_NAME,     // Nome do banco de dados usado
    port: DB_PORT,             // Porta para conexão com banco de dados
    secret: SECRET_KEY,     // Palavra-chave do token

    //Configurações opcionais da aplicação
    define: {

        underscored: true,              // Traduz os campos para snake_case
        underscoredAll: true,           // Traduz todos os campos para snake_case
        paranoid: true                  // Permite o uso da exclusão lógica
    }
}