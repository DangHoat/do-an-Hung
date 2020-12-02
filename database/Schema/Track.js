const mongoose = require('mongoose')
const track = new mongoose.Schema({
    password:{
        type:string
    },
    phone:{
        type:number,
        unique:true
    },
    follower:{
        
    },location:{

    },
    update_at: {
        type: Date
    }
})