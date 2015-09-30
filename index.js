var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ss = require('socket.io-stream');
var path = require('path');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
io.on('connection', function(socket){
	  console.log('utilisateur connecter :', socket.request.connection._peername);
  socket.on('disconnect', function(){
    console.log('utilisateur déconnecter');
  });
});
http.listen(3000, function(){
  console.log('serveur en ecoute sur le port:3000');
});
