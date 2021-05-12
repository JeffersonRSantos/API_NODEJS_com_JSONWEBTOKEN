const express = require('express')
const route = express.Router()

const page = require('./controllers/pageController')
const authPage = require('./controllers/authController')

const verifyToken = require('./middlewares/verifyToken')

//routes default
route.get('/', page.index)

//routes auth
route.post('/register', authPage.register)
route.post('/login',authPage.login)

//route with middleware
route.post('/listar', verifyToken.verifyToken, page.listar)
route.post('/criar-item', verifyToken.verifyToken, page.createItem)

module.exports = route