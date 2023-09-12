const express = require('express');
const { connection } = require('./database/connection');
const routes = require('./routes/index');

class Server {

    // Ao ser instanciado, executa as funções
    constructor(server = express()) {
        this.middlewares(server);
        this.database();
        this.allRoutes(server);
        this.initializeServer(server);
    }

    // Indica quais middlewares serão usados
    async middlewares(server) {
        server.use(express.json());
    }

    // Conecta ao banco de dados
    async database() {
        try {
            await connection.authenticate()
        } catch (error) {
            console.log(error);
        }
    }

    // Indica as rotas a serem usadas
    async allRoutes(server) {
        server.use(routes);
    }

    // Inicializa o servidor
    async initializeServer(server) {
        const PORT = 3333
        server.listen(PORT);
    }
}

module.exports = { Server };