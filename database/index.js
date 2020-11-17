const mongoose = require('mongoose')
const DB_CONNECT  = process.env.DB_CONNECT||"mongodb+srv://dbDoAn2020:BQH1998@bqh-cluster.7prba.mongodb.net/dbDoAn2020?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECT, {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected Database!!")
});

