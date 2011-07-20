//Application superobject.
var CHODE = {};

var http = require('http');
var sys = require('sys');

CHODE.server = http.createServer(function (req, res){
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is chode speaking.');
  console.log('Request completed to ' + req.headers);
  }).listen(8080, "127.0.0.1");

console.log('Chode server running at localhost:8080');

