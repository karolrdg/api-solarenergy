const { verify } = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

async function auth(request, response, next){
    try {
        console.log(request)
        const { authorization } = request.headers
        request["payload"] = verify(authorization, process.env.JWT_SECRET_KEY)
        next()
    } catch (error) {
        return response.status(401).send({
            message: "Falha na autenticação",
            cause: error.message})
    }
}

module.exports = { auth }