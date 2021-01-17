const express = require("express")
const routers = express.Router()
const middleware = require('./Middleware/AuthMiddleware')
const MapTrackLocationController = require('../controller/MapTrackLocationController')
routers.post('/start',MapTrackLocationController.startTrack)
routers.use(middleware.middlwareIsAuth )
routers.get('/',MapTrackLocationController.getTracker)
routers.post('/',MapTrackLocationController.createTrack)

routers.put('/',MapTrackLocationController.updateTracker)
routers.patch('/',()=>{
    
})
module.exports = routers