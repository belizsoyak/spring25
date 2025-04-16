const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sam:helloworld@cluster0.ytnrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  nick: String,
  msg: String,
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  Message.find().sort({ timestamp: 1 }).limit(20).then((msgs) => {
    msgs.forEach((m) => {
      socket.emit('chat message', { nick: m.nick, msg: m.msg });
    });
  });

  socket.nickname = 'Anonymous';

  socket.on('set nickname', (nick) => {
    socket.nickname = nick;
    io.emit('chat message', {
      nick: 'System',
      msg: `🟢 ${socket.nickname} has connected`
    });
  });

  socket.on('chat message', ({ msg, nick }) => {

    const message = new Message({ msg, nick }); 
    
    message.save().then(() => {
      console.log('Message saved to MongoDB:', msg, 'from', nick);
    }).catch(err => {
      console.error('❌ Failed to save message:', err);
    });

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

app.get('/messages', async function(req, res) {
  res.json(await Message.find());
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});