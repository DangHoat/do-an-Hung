const Track = require('../database/Schema/Track')
const Location = require('../database/Schema/Location')
const User = require("../database/Schema/User")
const getMapUser = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const getTracker = async (req,res)=>{
    try {
        const user = await User.findOne({
            _id: req.token.data._id
        })
        return res.status(200).send({
           message:"Thành công!!!",
           tracker:user.tracker
        })
    } catch (error) {
        return res.status(500).send({
            message:"Thất bại!",
            error:error
         })
    }
    
}
const updatTracker = (req,res)=>{
    const {name,password,password2,phone} = req.body
    if(password!=password2) return res.status(404).send({
        message:""
    })
    const track = new Track({
        name : name,
        password:password,
        phone:phone

    })
    return res.status(200).send({

    })

}
const createTrack = async (req,res,next)=>{
    const {name,password,password2,phone} = req.body
    if(password!=password2) return res.status(404).send({
        message:""
    })
    try {
        const track = new Track({
            name : name,
            password:password,
            phone:phone,
            follower :{
                $push: req.token.data._id
            }
    
        });
        await track.save()
    } catch (error) {
        
    }
    
    return res.status(200).send({

    })

}
module.exports ={
    getMapUser : getMapUser,
    createTrack:createTrack,
    getTracker : getTracker,
    updatTracker:updatTracker
}