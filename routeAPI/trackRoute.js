const express = require("express")
let routers = express.Router()
const middleware = require('./Middleware/AuthMiddleware')
const MapTrackLocationController = require('../controller/MapTrackLocationController')
routers.use(middleware.middlwareIsAuth)
routers.get('/:userID',MapTrackLocationController.getTracker)
routers.post('/',MapTrackLocationController.createTrack)
routers.put('/',MapTrackLocationController.updatTracker)
routers.patch('/',()=>{
    
})
module.exports = routers