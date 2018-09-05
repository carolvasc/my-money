const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    // Caso seja uma requisição do tipo OPTIONS, o authSecret não autenticará o token
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if (!token) {
            return res.status(403).send({ errors: ['No token provided.'] })
        }

        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                console.log(err)
                return res.status(403).send({
                    errors: ['Falha ao autenticar o token']
                })
            } else {
                // Caso eu queira utilizar esse token decodificado em outros lugares
                //req.decoded = decoded
                next()
            }
        })
    }
}