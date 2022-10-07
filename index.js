'use strict';

require('dotenv').config()
const io = require('socket.io-client');
const socket = io(process.env.SERVER_URL || 'http://localhost:3001');

console.log('Connecting...')
socket.on('connect', () => {
  console.log('[INFO]: Welcome to the game')
});