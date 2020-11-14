const routers =  require('express').Router()
const AuthController =  require('../controller/AuthController')
routers.get('/',(req,res,next)=>{
    return "";
})

module.exports = routers