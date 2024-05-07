var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.get('/',function(req, res){
    res.status(200).send("Hola Mundo")
});

server.listen(3002, function(){
    console.log("el servidor esat corriendo en http://localHost:3002");
});