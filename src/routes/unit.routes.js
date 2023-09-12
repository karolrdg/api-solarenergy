const { Router } = require('express')

class UnitRouter {

    routesFromUnit() {
        const unitRoutes = Router();
        unitRoutes.get('/v1/unidade', (req, res) => { res.status(200).send("teste unit get") })
        unitRoutes.post('/v1/unidade', (req, res) => { res.status(200).send("teste unit post") })
        unitRoutes.put('/v1/unidade/:id', (req, res) => { res.status(200).send("teste unit put") })
        unitRoutes.delete('/v1/unidade/:id', (req, res) => { res.status(200).send("teste unit delete") })

        return unitRoutes
    }
}

module.exports = new UnitRouter();