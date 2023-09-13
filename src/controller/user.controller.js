const { Users } = require('../models/user')

class UsersController {

    async createUser(req, res) {
        try {

            return res.status(201).send("teste user POST")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async listUser(req, res) {
        try {

            return res.status(200).send("teste user GET")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async editUser(req, res) {
        try {

            return res.status(200).send("teste user PUT")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async deleteUser(req, res) {
        try {

            return res.status(200).send("teste user DELETE")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = new UsersController();