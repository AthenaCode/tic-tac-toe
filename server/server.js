var express = require ('express');
var app = express();

app.get('/', function(res, req){
	res.send('this is tic-tac-toe');
})

app.listen(3000, function(){
	console.log('app is listening');
})