const jwt = require('jsonwebtoken')

module.exports = {
    async verifyToken(req, res, next){
        const token = req.headers['x-access-token']
        jwt.verify(token, process.env.SECRET, error => {
            if(error) return res.status(401).json({
                error: "Token invalido."
            })
            next()
        })
    }
}