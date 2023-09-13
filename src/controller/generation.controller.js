const { sign } = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { Generation } = require('../models/generation')

class GenerationController {

    async createGeneration(request, response) {

        try {
            const {
                created_by,
                reference_date,
                total_generated
            } = request.body;
            const keysAllowed = [
                "created_by",
                "reference_date",
                "total_generated"
            ]

            if (checkBody(keysAllowed,request.body)){
                return response.status(400).send({
                    msg: 'Algum campo enviado não é permitido.'
                })
            }

            const data = await Generation.create({
                created_by,
                reference_date,
                total_generated
                })
                
            return response.status(201).send(data)

            
        } catch (error) {
        const statusCode = error.message.status || 400;
        const message = error.message.msg || error.message;
        
        return response.status(parseInt(statusCode)).send(
            {
                msg: "Erro enviado do banco de dados",
                cause: message
            }
        )
        }        
    }

    async listGeneration(request, response) {
        try {
            const { id } = request.params
            const idtest = parseInt(id)
            if ( idtest <= 0 || isNaN(idtest) ){
                return response.status(400).send({
                    msg: 'Valor do id tem que ser numérico e positivo.'
                })
            }
            const generation = await Generation.findOne({ where: { id }})
            if (!generation) return response.status(400).send({
                                                            msg: 'Id inválido.'
                                                        })
            return response.status(200).send(generation)
        } catch (error) {
            return response.status(400).send({
                msg: "Erro enviado do banco de dados",
                error: error.message
            })
        }

    }

    async editGeneration(request, response) {
        try {
            const {
                created_by,
               reference_date,
                total_generated
            } = request.body;
            const keysAllowed = [
                "created_by",
                "reference_date",
                "total_generated"
            ]
            if (checkBody(keysAllowed,request.body)){
                return response.status(400).send({
                    msg: 'Algum campo enviado não é permitido.'
                })
            }

            const { id } = request.params
            const idtest = parseInt(id)
            if ( idtest <= 0 || isNaN(idtest) ){
                return response.status(400).send({
                    msg: 'Valor do id tem que ser numérico e positivo.'
                })
            }
            if (!reference_date && !total_generated) {
                return response.status(400).send({
                    msg: 'Não há parametros para atualizar o registro'
                })
            }
            const generation = await Generation.findOne({ where: { id }})
            if (!generation) return response.status(400).send({
                                                            msg: 'Unidade geradora não encontrada.'
                                                        })
            await Generation.update(
                {created_by, reference_date, total_generated },
                { where: { id } }
            )
            return response.status(204).send()
        } catch (error) {
            return response.status(400).send({
                msg: "Erro enviado do banco de dados",
                error: error.message
            })
        }
    }

    async deleteGeneration(request,response){
        try {
            const { id } = request.params
            const idtest = parseInt(id)
            if ( idtest <= 0 || isNaN(idtest) ){
                return response.status(400).send({
                    msg: 'Valor do id tem que ser numérico e positivo.'
                })
            }
            const generation = await Generation.findOne({ where: { id }})
            if (!generation) return response.status(400).send({
                                                            msg: 'Unidade geradora não encontrada.'
                                                        })
            await Generation.destroy({ where: { id }})
            return response.status(204).send()
        } catch (error) {
            return response.status(400).send({
                msg: "Erro enviado do banco de dados",
                error: error.message
            })
        }

    }
}

module.exports = new GenerationController();
