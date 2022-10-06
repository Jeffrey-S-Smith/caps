'use strict';

const MessageClient = require('./lib/messageClient.js');
// const URL = process.env.SERVER_URL;

const messages = new MessageClient('1-206-flowers');

messages.subscribe('delivered', (payload) => {
  console.log(payload);
});

messages.publish('pickup', {
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
   customer: 'Jamal Braun',
   address: 'Schmittfort, LA', 
});