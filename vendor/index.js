'use strict';

const io = require('socket.io-client');
const handleVendor = require('./handleVendor.js');

const socket = io.connect('http://localhost:3002/caps');

socket.on('delivery', handleVendor(socket));