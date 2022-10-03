'use strict';

const eventPool = require('../eventPool.js');

const { onDelivery } = require('./driver/handleDriver.js');
const {  } = require('./vender/handleVender.js');


module.exports = () => {
  eventPool.on('PICKUP', onPickup);
  eventPool.on('DELIVERY', onDelivery);
  eventPool.on('PICKUP', (payload) => {
    logger('PICKUP', payload)
  });
  eventPool.on('IN TRANSIT', (payload) => {
    logger('IN TRANSIT', payload)
  });

  eventPool.on('DELIVERY', (payload) => {
    logger('DELIVERY', payload)
  });

  eventPool.on('RECEIVED', onReceived);
  eventPool.on('GET_ALL', onGetAll);
};