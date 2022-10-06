
'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const MessageQueue = require('../queue-client/lib/queue.js');

const server = io(PORT);
const messages = server.of('messages');
const pickupQ= new MessageQueue();
const recievedQueue = new MessageQueue();

messages.on('connection', (socket) => {

  console.log('Socket Connected!!', socket.id);
  socket.on('join', (payload) => {
    console.log('Room registered', payload.clientId);
    socket.join(payload.clientId);
  });

  socket.on('pickup', (payload) => {
    console.log("MESSAGE SENT", payload);
    pickupQ.add(payload.clientId, payload.body);
    socket.to(payload.clientId).emit('pickupQ', payload);
  });

  // client needs all messages from a clientId
  socket.on('get-pickup', (payload) => {
    pickupQ.get(payload.clientId).forEach(message => {
      // this emits back to the same client that published the "get-messages"
      socket.emit('pickup', message);
    });
  });

  socket.on('delivered', (payload) => {
    let receipt = pickupQ.read(payload.clientId, payload.body.messageId);
    console.log("MESSAGE REMOVED", payload);
    socket.to(payload.clientId).emit('delivered', receipt);
  });

  socket.on('transit', (payload) => {
  pickupQ.get(payload.clientId).forEach(message => {
    // this emits back to the same client that published the "get-messages"
    socket.emit('transit', message);
  });
  });
})
