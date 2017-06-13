const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname,'../public');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });
});
const port = process.env.PORT || 3000;


server.listen(port, () =>{
  console.log(`Started at port ${port}`);
});

module.exports={app};
