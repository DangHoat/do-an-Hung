const mongoose = require('mongoose')
const { string, number } = require('prop-types')
const location = new mongoose.Schema({
   coordinate:{
      type:Map,
      of:string
   },
   symbol:{
      type:string,
      default :"toa do"
   },
   phase:{

   },
   time_start:{
       
   }
})