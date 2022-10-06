'use strict';

const MessageClient = require('./lib/messageClient.js');

const messages = new MessageClient('1-206-flowers');

messages.subscribe('pickup', (payload) => {
  console.log(payload);
  messages.publish('transit', payload);
});

messages.publish('get-pickup', {clientId: '1-206-flowers'});