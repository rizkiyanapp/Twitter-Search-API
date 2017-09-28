// // VARIABLE
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var twit = require('twit')


// INIT TWIT
var T = new twit({
  consumer_key:         '4yt2POfzwdG38v1oIZEPkjVBh',
  consumer_secret:      '0epHSeAZHHHw6EG0a4SAOJVE2aenhBbkmyERLG3k8yPPcgsEXZ',
  access_token:         '258342186-ZaMJQkrmJ5EkZc2z4Zu6KbiDBmqSwLxTo64ggFFC',
  access_token_secret:  'Fk4ZsZpp1fYb23vga7jHuRo16zkIGdAZf8DFqkr4FGhGf',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

// SERVER INIT
app.listen(3000, function () {
  console.log('Server running at *:3000')
});

// GET
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/search/:key', function(req, res) {
  T.get('search/tweets', { q: req.params.key, count: 50 }, function(err, data, response) {
    res.json(data)
  })
  // res.send(req.params.key)
});