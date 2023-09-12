const { Router } = require('express');
const { routesFromLogin } = require('./login.routes')
const { routesFromUnit } = require('./unit.routes')
const { routesFromUser } = require('./user.routes')
const { routesFromGenerator } = require('./generator.routes')

const routes = new Router();

// Criação de rotas
routes.use('/api', [routesFromLogin(), routesFromUnit(), routesFromUser(), routesFromGenerator()]);

module.exports = routes;