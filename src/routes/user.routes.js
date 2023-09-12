const { Router } = require('express')

class UserRouter {

    routesFromUser() {
        const userRoutes = Router()
        userRoutes.get('/v1/usuario', (req, res) => { res.status(200).send("teste user get") })
        userRoutes.post('/v1/usuario', (req, res) => { res.status(200).send("teste user post") })
        userRoutes.put('/v1/usuario/:id', (req, res) => { res.status(200).send("teste user put") })
        userRoutes.delete('/v1/usuario/:id', (req, res) => { res.status(200).send("teste user delete") })

        return userRoutes;
    }
}

module.exports = new UserRouter();