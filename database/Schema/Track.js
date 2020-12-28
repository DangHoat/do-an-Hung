const mongoose = require('mongoose')
const trackSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    password:{
        type:String 
    },
    phone:{
        type:Number,
        unique:true
    },
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    ,locations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref :"Location"
    }],
    update_at: {
        type: Date
    }
})
module.exports = mongoose.model("Track",trackSchema)