var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
app.use(express.bodyParser());

function connect() {
  var conn = mysql.createConnection({
	host : '174.79.32.158',
	user : 'c647456',
	password : 'c647456'
  });
  conn.query('USE c647456');
  return conn;
}

app.get('/id/:id', function(req, res){
	var sql = 'SELECT * FROM ?? WHERE ?? = ?';
	var inserts = ['contact', 'id', req.params.id];
	var q = mysql.format(sql, inserts);
	var connection = connect();
	connection.query(q, function(err, rows){
		res.send(rows[0]);
		connection.end();
	});
});

var server = app.listen(8001, function(err){
	console.log('Listening on port 8001');
});