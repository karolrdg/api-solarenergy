const { Router } = require('express')
const { createUnit, listUnit, editUnit, deleteUnit } = require('../controller/unit.controller')

class UnitRouter {

    routesFromUnit() {
        const unitRoutes = Router();
        unitRoutes.get('/v1/unidade', listUnit)
        unitRoutes.post('/v1/unidade', createUnit)
        unitRoutes.put('/v1/unidade/:id', editUnit)
        unitRoutes.delete('/v1/unidade/:id', deleteUnit)

        return unitRoutes
    }
}

module.exports = new UnitRouter();