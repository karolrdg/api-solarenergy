const { Router } = require('express');
const { routesFromUnit } = require('./unit.routes')
const { routesFromUser } = require('./user.routes')
const { routesFromGeneration } = require('./generation.routes')

const routes = new Router();

// Criação de rotas
routes.use('/api', [
    routesFromUnit(), 
    routesFromUser(), 
    routesFromGeneration()
]);

module.exports = routes;