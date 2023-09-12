const { Router } = require('express')
const { createUser, listUser, editUser, deleteUser } = require('../controller/user.controller')

class UserRouter {

    routesFromUser() {
        const userRoutes = Router()
        userRoutes.get('/v1/usuario', listUser)
        userRoutes.post('/v1/usuario', createUser)
        userRoutes.put('/v1/usuario/:id', editUser)
        userRoutes.delete('/v1/usuario/:id', deleteUser)

        return userRoutes;
    }
}

module.exports = new UserRouter();