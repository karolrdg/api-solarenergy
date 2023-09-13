

class UnitController {

    async createUnit(req, res) {
        try {

            return res.status(201).send("teste unit POST")
        } catch (error) {
            return res.status(400).send(error.message)
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