'use crt'
require("dotenv").config()
const fs = require("fs")
const cors = require('cors')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const multer  = require('multer')
const moment =  require('moment') 
const io = require('socket.io')(server)

//config
const PORT = process.env.PORT || 3000
app.set('port',PORT)
//connect database
 require("./database/index")
 // ======================================= //
//set forder
app.use(express.static("public"));
//set CORS
app.use(cors())
// ======================================= //
//set request
app.use(express.json())
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// for parsing multipart/form-data
// ======================================== //

//Middleware
const middleware = require('./route/Middleware/AuthMiddleware')
// ======================================== //
//inport route 
const authRoute = require('./route/authRoute.js') 
app.use('/api/v1/auth',authRoute)
app.use(middleware.middlwareIsAuth)
const homeRoute = require('./route/homeRoute')
app.use('api/v1/home',homeRoute)
app.use('/api/v1/*',(req,res)=>{
  res.status(404).send({
    status : 404,
    message : "Not Found!"
  })
})
// ======================================== //
//socket IO
let interval;
io.on('connection', (socket)=>{
    console.log("New client connected"+socket);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
})
const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };

server.listen(app.get('port'),()=>{
    console.log(`Listening port : ${app.get('port')}`)
})
