
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));



app.use('/client',express.static(__dirname + '/client'));
serv.listen(2000);
console.log("Server start");

var io = require('socket.io') (serv,{});
io.sockets.on('connection', function(socket) {
	
	
  socket.on('create', function(room) {
    socket.join(room);
  });
  
   socket.on('sendNote', function({room,note}) {
      // you can try one of these three options
console.log(note);
console.log(room);
      // this is used to send to all connecting sockets
    //  io.sockets.emit('eventToClient', { id: userid, name: username });
      // this is used to send to all connecting sockets except the sending one
	  //socket.broadcast.to(room).emit('sendNoteToClient',{ note });
      socket.to(room).emit('sendNoteToClient',{ note });
      // this is used to the sending one
     // socket.emit('eventToClient',{ id: userid, name: username });
  });
  
  
  
});