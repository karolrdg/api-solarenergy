const { Router } = require('express')

class LoginRouter {

    routesFromLogin() {
        const loginRoutes = Router()
        loginRoutes.post('/v1/login', (req, res) => { res.status(200).send("teste login post") })

        return loginRoutes;
    }
}

module.exports = new LoginRouter();