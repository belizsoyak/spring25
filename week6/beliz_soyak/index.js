const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.nickname = 'Anonymous';

  socket.on('set nickname', (nick) => {
    socket.nickname = nick;
    io.emit('chat message', {
      nick: 'System',
      msg: `🟢 ${socket.nickname} has connected`
    });
  });

  socket.on('chat message', ({ msg, nick }) => {
    io.emit('chat message', { msg, nick });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('chat message', {
      nick: 'System',
      msg: `🔴 ${socket.nickname} has disconnected`
    });
  });
  socket.on('typing', function(nick) {
    socket.broadcast.emit('typing', nick);
  });

});

server.listen(1000, () => {
  console.log('listening on *:3000');
});