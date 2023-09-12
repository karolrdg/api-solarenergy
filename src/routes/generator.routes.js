const { Router } = require('express')

class GeneratorRouter {

    routesFromGenerator() {
        const generatorRoutes = Router()
        generatorRoutes.get('/v1/geracao', (req, res) => { res.status(200).send("teste generator get") })
        generatorRoutes.post('/v1/geracao', (req, res) => { res.status(200).send("teste generator post") })
        generatorRoutes.put('/v1/geracao/:id', (req, res) => { res.status(200).send("teste generator put") })
        generatorRoutes.delete('/v1/geracao/:id', (req, res) => { res.status(200).send("teste generator delete") })

        return generatorRoutes;
    }
}

module.exports = new GeneratorRouter()