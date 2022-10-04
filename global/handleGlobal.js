'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('../eventPool.js');

const server = io(PORT);
const body = server.of('/caps')

body.on('connection', (socket) => {
  console.log('We are connected!');

  eventPool.forEach(event => {
    socket.on(event, (payload) => {
      console.log('EVENT', payload);
    });
  });
  socket.on('pickup', (payload) => socket.broadcast.emit('pickup', payload));
  socket.on('transit', (payload) => socket.broadcast.emit('transit', payload));
  socket.on('delivery', (payload) => socket.broadcast.emit('delivery', payload));
});



module.exports = body;