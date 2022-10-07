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
    nickname = input || randomNickname;
    console.log(`Hello, ${nickname}`);
    socket.emit('join-game', nickname);
  });
});

socket.on('broadcast-joined-event', (player) => {
  console.log(`${player} joined the server!`);
});

socket.on('attempt', (input) => {
  console.log(input);
});

socket.on('game-start', () => {
  console.log('Welcome to the game! We\'ll let you know when the next round starts.')
  rl.on('line', (input) => {
    if (input) {
      socket.emit('attempt', input, nickname);
    }
  });
});

socket.on('word-switch', (word) => {
  console.log('The word has changed!');
  console.log('The new word is -', word);
});

socket.on('success', () => {
  console.log('Win!');
});

socket.on('broadcast-success', (player) => {
  console.log(`${player} won this round!`);
});