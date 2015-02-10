var express = require("express");

var app = express();
var port = (9001);

app.listen(port); 

 var messages = [];

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();

})


app.get('/', function(req, res){
	res.send('test')
})


app.post('/', function(req, res){
	messages.push(req.body);
	res.send(JSON.stringify(messages));
})


