const { Router } = require('express');
const { routesFromLogin } = require('./login.routes')
const { routesFromUnit } = require('./unit.routes')
const { routesFromUser } = require('./user.routes')
const { routesFromGeneration } = require('./generation.routes')

const routes = new Router();

// Criação de rotas
routes.use('/api', [routesFromLogin(), routesFromUnit(), routesFromUser(), routesFromGeneration()]);

module.exports = routes;