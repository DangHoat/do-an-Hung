const mongoose = require('mongoose')
const track = new mongoose.Schema({
    password:{
        type:String 
    },
    phone:{
        type:Number,
        unique:true
    },
    follower:{
        
    },location:{

    },
    update_at: {
        type: Date
    }
})