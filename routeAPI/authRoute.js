const express = require('express')
const routers =  express.Router()
const middleware =  require('./Middleware/AuthMiddleware')
const AuthController =  require('../controller/AuthController')

routers.post('/login',AuthController.login)
routers.post('/register',AuthController.register)
routers.use(middleware.middlwareIsAuth)
routers.get('/:user',AuthController.getUserByID)
routers.patch('/change-account',AuthController.updateUser)
routers.get('/refresh',AuthController.refreshToken)

routers.put('/refresh',middleware.middlwareIsAuth,AuthController.refreshToken)
module.exports = routers