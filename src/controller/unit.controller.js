const { Unidade } = require('../models/unidade')
const { checkDataBody } = require('../services/checkDataBody')

class UnitController {

    async createUnit(req, res) {
        try {
            const {
                name,
                address,
                brand,
                model,
                active
            } = req.body

            const dataPermited = [
                "name",
                "address",
                "brand",
                "model",
                "active"
            ]

            if (checkDataBody(dataPermited, req.body)) {
                return res.status(400).send({
                    msg: "Algum campo enviado não é permitido"
                })
            }

            const data = await Unidade.create({
                name,
                address,
                brand,
                model,
                active
            })

            return res.status(201).send({
                msg: "Nova unidade criada com sucesso",
                newUnit: data
            })
        } catch (error) {
            const message = error.message.msg || error.message
            return res.status(400).send({
                message
            })
        }
    }

    async listUnit(req, res) {
        try {

            return res.status(200).send("teste unit GET")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async editUnit(req, res) {
        try {

            return res.status(200).send("teste unit PUT")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async deleteUnit(req, res) {
        try {

            return res.status(200).send("teste unit DELETE")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = new UnitController();