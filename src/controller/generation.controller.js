class GenerationController {

    async createGeneration(req, res) {
        try {

            return res.status(201).send("teste generation POST")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async listGeneration(req, res) {
        try {

            return res.status(200).send("teste generation GET")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async editGeneration(req, res) {
        try {

            return res.status(200).send("teste generation PUT")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }

    async deleteGeneration(req, res) {
        try {

            return res.status(200).send("teste generation DELETE")
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = new GenerationController();