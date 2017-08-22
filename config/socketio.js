const http = require('http');
const socketio = require('socket.io');

const configureChat = require('../app/controllers/chat.server.controller');

module.exports = function (app) {
  const server = http.Server(app);
  const io = socketio(server);

  io.on('connection', function(socket){
    configureChat(io, socket);
  });

  server.listen(9822);
  return server;
}
