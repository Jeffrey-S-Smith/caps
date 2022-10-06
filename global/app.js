'use strict';

const MessageClient = require('../queue-client/lib/messageClient.js');
const cap = new MessageClient('1-206-flowers');

setInterval(() => {
  cap.publish('pickup', { event: 'pickup',
time: '2020-03-06T18:27:17.732Z',
payload:
 { store: '1-206-flowers',
   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
   customer: 'Jamal Braun',
   address: 'Schmittfort, LA' } });

   cap.publish('transit', { event: 'in-transit',
   time: '2020-03-06T18:27:18.738Z',
   payload:
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' } });

      cap.publish('delivery', { event: 'delivered',
   time: '2020-03-06T18:27:20.736Z',
   payload:
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' } });
}, 3000);