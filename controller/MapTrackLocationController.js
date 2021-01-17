const Track = require('../database/Schema/Track')
const Location = require('../database/Schema/Location')
const User = require("../database/Schema/User")
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwt')
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
const updateTracker = (req,res)=>{
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
const startTrack = async (req,res)=>{
    const {name,password} = req.body
    let track
    try {
        track = await Track.findOn({
            name : name
        })
        if(track == null  || !bcrypt.compareSync(password,track.password))
        {
            return res.status(404).send({
                message :  "Tài khoản không đúng!!"
            })
        }
        return res.status(200).send({
            message :" Thành công!",
            data:{
                id : track._id,
                name : track.name,
                token : await jwt.createToken({
                    name : track.name,
                    password : track.password,
                    _id:track._id
                })
                
            }
        })

    } catch (error) {
        return res.status(505).send({
            message:error
        })
    }

}
const createTrack = async (req,res,next)=>{
    var salt = bcrypt.genSaltSync(Math.floor(Math.random() * 10)+1)
    const {name,password,password2,phone} = req.body
    if(password!=password2) return res.status(404).send({
        message:""
    })
    try {
        const track = new Track({
            name : name,
            password:bcrypt.hashSync(password,salt),
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
    updateTracker:updateTracker,
    startTrack:startTrack
    
}