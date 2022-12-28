//Q3.Create basic "Hello world"app using node and express.

var express = require('express');
var app = express();
const path = require("path")
const PORT = 5000;


app.get('/', (req, res) =>{
  res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log("server running on port" + PORT);
})