const express = require("express")
let routers = express.Router()
const middleware = require('./Middleware/AuthMiddleware')
routers.use(middleware.middlwareIsAuth)
const mapTrackLocationController = require("../controller/MapTrackLocationController")
module.exports = routers