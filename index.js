'use crt'
require("dotenv").config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
//
const PORT = process.env.PORT || 3000

//connect database
 require("./database/index")
//set template view
const middleware = require('./route/Middleware/AuthMiddleware')
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set("views", "./views");
app.set('port',PORT)



//inport route
const authRoute = require('./route/authRoute.js')
//
app.use(express.json())
app.use(middleware.middlwareIsAuth)
app.get('/',(req,res)=>{
   res.redirect("/auth/login") 
})
app.use('/auth/login',authRoute)
let interval;
//socket IO
io.on('connection', (socket)=>{
    console.log("New client connected");
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
