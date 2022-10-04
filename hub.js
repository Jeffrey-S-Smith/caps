'use strict';

const eventPool = require('./eventPool.js');
const events = require('./eventEmitter.js')

const handleDriver = require('./driver/handleDriver.js');
const handleVendor = require('./vendor/handleVendor.js');
const handleGlobal = require('./global/handleGlobal.js')

events.on('pickup', handleDriver);
events.on('transit', handleDriver);
events.on('delivery', handleVendor);
events.on('global', handleGlobal);

events.emit(eventPool[0], { event: 'pickup',
time: '2020-03-06T18:27:17.732Z',
payload:
 { store: '1-206-flowers',
   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
   customer: 'Jamal Braun',
   address: 'Schmittfort, LA' } });

   events.emit(eventPool[1], { event: 'in-transit',
   time: '2020-03-06T18:27:18.738Z',
   payload:
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' } });

   events.emit(eventPool[2], { event: 'delivered',
   time: '2020-03-06T18:27:20.736Z',
   payload:
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' } });
   