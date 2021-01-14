const express = require('express')
const routers =  express.Router()
const cors = require('cors')
const middleware =  require('./Middleware/AuthMiddleware')
const AuthController =  require('../controller/AuthController')

routers.post('/login',cors(),AuthController.login)
routers.post('/register',AuthController.register)
routers.use(middleware.middlwareIsAuth)
routers.get('/:userID',AuthController.getUserByID)
routers.patch('/change-account',AuthController.updateUser)
routers.get('/refresh',AuthController.refreshToken)

routers.put('/refresh',middleware.middlwareIsAuth,AuthController.refreshToken)
module.exports = routers