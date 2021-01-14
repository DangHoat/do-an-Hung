const Track = require('../database/Schema/Track')
const Location = require('../database/Schema/Location')
const User = require("../database/Schema/User")
const getMapUser = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const getTracker = (req,res)=>{
}
const updatTracker = (req,res)=>{
    const {name,password,password2,phone} = req.body
    return res.status(200).send({
        
    })

}
const createTrack = (req,res)=>{
    let {usesname,password} = req.body;

}
module.exports ={
    getMapUser : getMapUser,
    createTrack:createTrack,
    getTracker : getTracker,
    updatTracker:updatTracker
}