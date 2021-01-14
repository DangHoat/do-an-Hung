const express = require("express")
const routers = express.Router()
const middleware = require('./Middleware/AuthMiddleware')
const MapTrackLocationController = require('../controller/MapTrackLocationController')

routers.get('/',MapTrackLocationController.getTracker)
routers.post('/',MapTrackLocationController.createTrack)
routers.put('/',MapTrackLocationController.updatTracker)
routers.patch('/',()=>{
    
})
module.exports = routers