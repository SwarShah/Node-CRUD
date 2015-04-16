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

app.post('/', function(req, res) {
	var sql = 'INSERT INTO contact values(?, ?, ?, ?, ?, ?, ?, ?)';
	var inserts = [req.body.first, req.body.last, req.body.extension, req.body.id, req.body.imageUrl,
		req.body.office, req.body.department, req.body.manager];
	var q = mysql.format(sql, inserts);
	var connection = connect();
	connection.query(q, function(err, result){
		if(err){
			throw err;
			connection.end();
		}
		else{
			res.send();
		}
	});
});

app.delete('/id/:id', function(req, res) {
	var sql = 'DELETE FROM contact where id = ?';
	var inserts = [req.params.id];
	var q = mysql.format(sql, inserts);
	var connection = connect();
	connection.query(q, function(err, result){
		if(err){
			throw err;
			connection.end();
		}
		else{
			res.send();
		}
	});
});


var server = app.listen(8001, function(err){
	console.log('Listening on port 8001');
});