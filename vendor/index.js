'use strict';

require('dotenv').config();
const io = require('socket.io-client');
const handleVendor = require('./handleVendor.js');
let url = process.env.DRIVER_URL || 'http://localhost:3002/caps'

const socket = io.connect(url);


socket.on('delivery', handleVendor(socket));