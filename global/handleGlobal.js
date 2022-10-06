'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('../eventPool.js');
const MessageQ = require('../queue-client/lib/queue.js');

const server = io(PORT);
const body = server.of('/caps')
const pickupQ = new MessageQ();

body.on('connection', (socket) => {
  console.log('We are connected!');

  eventPool.forEach(event => {
    socket.on(event, (payload) => {
      console.log('EVENT', payload);
    });
  });
  socket.on('pickup', (payload) => { 
    pickupQ.add(payload.clientId, payload)
    console.log(pickupQ);

    socket.broadcast.emit('pickup', payload)
  });
  socket.on('transit', (payload) => {
    socket.broadcast.emit('transit', payload)
    console.log(pickupQ);
});

  socket.on('delivery', (payload) => {
    pickupQ.read(payload.clientId, payload.body.messageId);
    socket.broadcast.emit('delivery', payload)
});
});



module.exports = body;