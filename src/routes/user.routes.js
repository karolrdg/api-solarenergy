const { Router } = require('express')
const { loginUser, createUser, listUser, editUser, deleteUser } = require('../controller/user.controller')
const { auth } = require('../midlleware/auth')
class UserRouter {

    routesFromUser() {
        const userRoutes = Router()
        userRoutes.post('/v1/usuario', createUser)
        userRoutes.post('/v1/usuario/login', loginUser)
        userRoutes.get('/v1/usuario/:id', auth, listUser)
        userRoutes.put('/v1/usuario/:id', auth, editUser)
        userRoutes.delete('/v1/usuario/:id', auth, deleteUser)

        return userRoutes;
    }
}

module.exports = new UserRouter();