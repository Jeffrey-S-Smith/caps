'use strict';

const body = require('./handleGlobal.js');

setInterval(() => {
  body.emit('pickup', { event: 'pickup',
time: '2020-03-06T18:27:17.732Z',
payload:
 { store: '1-206-flowers',
   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
   customer: 'Jamal Braun',
   address: 'Schmittfort, LA' } });

   body.emit('transit', { event: 'in-transit',
   time: '2020-03-06T18:27:18.738Z',
   payload:
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' } });

      body.emit('delivery', { event: 'delivered',
   time: '2020-03-06T18:27:20.736Z',
   payload:
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' } });
}, 3000);