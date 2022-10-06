'use strict';
require('dotenv').config();
const io = require('socket.io-client');
const handleDriver = require('./handleDriver.js');
let url = process.env.DRIVER_URL || 'http://localhost:3002/caps'

const socket = io.connect('http://localhost:3002/caps');

console.log(socket);

socket.on('pickup', handleDriver(socket)); 
socket.on('transit', handleDriver(socket));