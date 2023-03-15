const express = require('express');
const htmlroute = require('./routes/htmlroutes');
const apiroute = require('./routes/apiroutes');
const PORT = 3000 || process.env.PORT

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlroute);
app.use('/api', apiroute);

//calling at port 3000
app.listen(PORT, (req,res) => {
  console.log ("you are on port 3000")
})