const mongoose = require('mongoose')
const locationSchema = new mongoose.Schema({
   coordinate:{
      type:Array,
      default:[]
   },
   symbol:{
      type:String,
      default :"toa do"
   },
   phase:{
      type:Number
   },
   time_start:{
       type:Date
   }
})
module.exports = mongoose.model("Location",locationSchema)