// // VARIABLE
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

// INIT STATIC FILES DIR
// app.use(express.static(path.join(__dirname + '/static')));

// SERVER INIT
// http.listen(process.env.PORT || 3000, function(){
//   console.log('Server running at *:3000');
// });

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})