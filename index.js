'use crt'
require("dotenv").config()
const fs = require("fs")
const cors = require('cors')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const multer = require('multer')
const moment = require('moment')
const io = require('socket.io')(server)
const User = require('./database/Schema/User')
const Track  = require("./database/Schema/Track")
const Location = require("./database/Schema/Location")

//config
const PORT = process.env.PORT || 3000
app.set('port', PORT)
//connect database
require("./database/index")
// ======================================= //
//set forder
app.use(express.static("public"));
//set CORS

app.use(cors())
io.set('origins', '*:*');



// ======================================= //
//set request
app.use(express.json())
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
// ======================================== //
/**
*Log
*/
app.use((req,res,next)=>{
  console.log(req.body)
  console.log(req.originalUrl)
  console.log(req.method)
  next()
})
//Middleware
const middleware = require('./routeAPI/Middleware/AuthMiddleware')

// ======================================== //
//inport routeAPI
const authRoute = require('./routeAPI/authRoute.js')
app.use('/api/v1/auth', authRoute)

const trackRoute = require('./routeAPI/trackRoute')
app.use('/api/v1/track', trackRoute)
const mapRoute = require('./routeAPI/mapRoute')
app.use('/api/v1/map', mapRoute)
app.use('/api/v1/*', (req, res) => {
  res.status(404).send({
    status: 404,
    message: "Not Found!"
  })
})
// ======================================== //
//socket IO
io.use((socket,next)=>{
  if(socket.handshake.query.token == "doanhungmo") next()
  else {
    next(new Error("fake!"))
  }
})
io.on('connection', (socket) => {
  console.log("New client connected" + socket);
  socket.on('join-room', (userId,jsonData) => {
    console.log(':::::::::::::::::')
    console.log(userId,jsonData)
    socket.join(userId)
    console.log(':::::::::::::::::')
    socket.to(userId).broadcast.emit(jsonData)
    saveTrack(userId,jsonData)
  })
  socket.emit("test","hiii")
  socket.on('connect_error',(err)=>{
    console.log(err)
  })
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
})

async function saveTrack(TrackID,jsonData){
  try {
    await console.log(Track.find())
    let newLocation = await Location.create({
      $push:{
        coordinate : jsonData.coordinate
      }
    })
    await Track.findByIdAndUpdate(TrackID,{
      $push:{
        newLocation : newLocation
      }
    },(err,data)=>{
      if(err) console.log(err)
    })
  } catch (error) {
    console.log(error)
  }

}


server.listen(app.get("port"), () => {
  console.log(`Listening port : ${app.get("port")}`);
});

