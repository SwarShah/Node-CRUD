var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();

function connect () {
  var conn = mysql.createConnection({
	host : '174.79.32.158',
	user : 'c647456',
	password : 'c647456'
  });
  conn.query('USE contact');
  return conn;
}

var server = app.listen(8001, function(err){
	console.log('Listening on port 8001');
});