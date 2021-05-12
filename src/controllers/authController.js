const connDb = require('../database/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req, res){
    const existsUser = await connDb('users').select('id', 'password').where({name: req.body.name})
    const passwordConfirm = validationPass(req.body.password, existsUser)
    if(passwordConfirm){
        const token = jwt.sign({id: existsUser[0].id}, process.env.SECRET , {expiresIn: '1h'})
        return res.json({ auth: true, access_token: token, expiresIn: '60 min' })
    }        
    return res.status(401).json({error: "Usuario ou senha invalida"})
}

async function register(req, res){
    const verifyExistsUSer = await connDb('users').select('id').where({name: req.body.name})
    if(verifyExistsUSer.length != 0){
        return res.status(401).json({error: "Ja existe um login com esse nome de usuario."})
    }
    await connDb('users').insert({
        name: req.body.name,
        password: hashPass(req.body.password),
        created_at: new Date()
    })
    return res.json({success: "Registro criado com sucesso."})
}

function hashPass (pass){
    const saltRouds = 10
    const salt = bcrypt.genSaltSync(saltRouds)
    const hash = bcrypt.hashSync(pass, salt)
    return hash
}

function validationPass(password, user){
    if(!password || user.length == 0) return false
    const comparePass = bcrypt.compareSync(password, user[0].password)
    if(comparePass) 
        return true
    return false
}

module.exports = {
    login,
    register
}