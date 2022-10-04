'use strict';

const events = require('../eventEmitter.js');

const handleDriver = (payload) => {
  events.emit('global', payload);
  if (payload.event === 'pickup') {
    console.log('DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0');
  } else {
    console.log('DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0');
  }
}

module.exports = handleDriver;