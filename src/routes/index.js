const { Router } = require('express');

const routes = new Router();

// Criação de rotas
routes.use('/api', (req, res) => { return res.send("Teste") });

module.exports = routes;