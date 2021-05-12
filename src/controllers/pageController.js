const connDb = require('../database/connection')

module.exports = {
    async index(req, res){
        return res.end("Bem vindo a nossa API with JWT")
    },

    async listar(req, res){        
        return res.json(await connDb('lists').select())
    },

    async createItem(req, res){
        try{
            const verifyExistsItem = await connDb('lists').select('name').where({name: req.body.name})
            if(verifyExistsItem.length != 0) return res.json({error: "Item existente."})
            await connDb('lists').insert({name: req.body.name, created_at: new Date()})
            return res.json({success: "Item cadastrado com sucesso."})
        }catch(error){
            return res.status(401).json({error: "Erro ao criar item."})
        }
    }
}