const express = require('express');
const htmlroute = require('./routes/htmlroutes');
const apiroute = require('./routes/apiroutes');
const fs = require('fs');
const { v4: uuid} = require("uuid");

const bodyParser = require('body-parser');
//const api = require('./public/assets/js/index.js');

const app = express();
const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlroute);
app.use('/api', apiroute);



const notes = [
  {
    noteId : 1,
    noteContent: "Please add your important notes here"
  }
]


app.listen(3000, (req,res) => {
  console.log ("you are on port 3000")
})