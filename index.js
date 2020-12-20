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
const Track  = require("./database/Schema/Track")

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

//Middleware
const middleware = require('./routeAPI/Middleware/AuthMiddleware')
// ======================================== //
//inport routeAPI
const authRoute = require('./routeAPI/authRoute.js')
app.use('/api/v1/auth', authRoute)
app.use(middleware.middlwareIsAuth)
const homeRoute = require('./routeAPI/homeRoute')
app.use('api/v1/home', homeRoute)
app.use('/api/v1/*', (req, res) => {
  res.status(404).send({
    status: 404,
    message: "Not Found!"
  })
})
// ======================================== //
//socket IO
io.on('connection', (socket) => {
  console.log("New client connected" + socket);
  socket.on('join-room', (userId,jsonData) => {
    console.table(userId,jsonData)
  })
})

async function saveTrack(jsonData){

}


server.listen(app.get('port'), () => {
  console.log(`Listening port : ${app.get('port')}`)
})
