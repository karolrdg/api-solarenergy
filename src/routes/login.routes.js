const { Router } = require('express')
const { loginUser } = require('../controller/login.controller')

class LoginRouter {

    routesFromLogin() {
        const loginRoutes = Router()
        loginRoutes.post('/v1/login', loginUser)

        return loginRoutes;
    }
}

module.exports = new LoginRouter();