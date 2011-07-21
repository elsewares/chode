//Application superobject.
var CHODE = {};

var http = require('http');
var sys = require('sys');

CHODE.server = http.createServer(function (req, res){
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is chode speaking.');

  }).listen(80);

console.log('Chode server running at localhost:80');

