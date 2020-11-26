const express = require("express")
let routers = express.Router()
const middleware = require('./Middleware/AuthMiddleware')
routers.use(middleware.middlwareIsAuth)
module.exports = routers