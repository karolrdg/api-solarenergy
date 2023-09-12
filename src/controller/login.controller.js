const { Users } = require('../models/user')

class LoginController {

    async loginUser(req, res) {
        try {

            return res.status(201).send("teste login POST")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

}

module.exports = new LoginController();