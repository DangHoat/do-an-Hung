const mongoose = require('mongoose')
const trackSchema = new mongoose.Schema({
    password:{
        type:String 
    },
    phone:{
        type:Number,
        unique:true
    },
    follower:{
        type:Array,
    },location:{
        type:Object
    },
    update_at: {
        type: Date
    }
})
module.exports = mongoose.model("Track",trackSchema)