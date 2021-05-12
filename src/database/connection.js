const knex = require('knex')

//arquivo de configuracao
const configDb = require('../../knexfile')

//metodo de conexao
const connection = knex(configDb.development)

module.exports = connection