const mongoose = require('mongoose')
const { string, number } = require('prop-types')
const location = new mongoose.Schema({
   coordinate:{
      type:Array,
      of:string
   },
   symbol:{
      type:string,
      default :"toa do"
   },
   phase:{
      type:number
   },
   time_start:{
       type:Date
   }
})
module.exports = mongoose.model("Location",location)