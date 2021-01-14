const express = require("express")
const routers = express.Router()
const middleware = require('./Middleware/AuthMiddleware')
routers.use(middleware.middlwareIsAuth)
const mapTrackLocationController = require("../controller/MapTrackLocationController")
module.exports = routers