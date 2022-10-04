'use strict';

const io = require('socket.io-client');
const handleDriver = require('./handleDriver.js');

const socket = io.connect('http://localhost:3002/caps');

socket.on('pickup', handleDriver(socket)); 
socket.on('transit', handleDriver(socket));