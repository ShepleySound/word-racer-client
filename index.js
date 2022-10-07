'use strict';

const randomNickname = 'Random Nickname12345'

require('dotenv').config();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const io = require('socket.io-client');
const socket = io(process.env.SERVER_URL || 'http://localhost:3001');

let nickname = null;

// rl.once('line', (input) => {
//   return input || randomNickname;
// });


console.log('Connecting...')
socket.on('connect', () => {
  // nickname = process.argv[2];
  // console.log(getName());
  console.log('[INFO]: Welcome to the game');
  console.log('Enter your name: ')
  rl.once('line', (input) => {
    const name = input || randomNickname;
    console.log(`Hello, ${name}`);
    socket.emit('join-game', name);
  });
});

socket.on('joined-event', (name) => {
  console.log(`${name} joined the server!`);
});