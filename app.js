var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<marquee>No me resisto!!</marquee>');
});

app.listen(3000, function () {
  console.log('Iniciado en puerto 3000');
});
