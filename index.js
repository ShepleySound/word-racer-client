'use strict';

require('dotenv').config();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const io = require('socket.io-client');
const socket = io(process.env.SERVER_URL || 'http://localhost:3001');

const player = {
  username: null,
  score: null,
};

console.log('Connecting...')
socket.on('connect', () => {
  // nickname = process.argv[2];
  // console.log(getName());
  console.log('[INFO]: Welcome to the game');
  console.log('Enter your name: ');
  rl.once('line', (input) => {
    socket.emit('join-game', input);
  });
});

socket.on('broadcast-joined-event', (username) => {
  console.log(`${username} joined the server!`);
});

socket.on('attempt', (input) => {
  console.log(input);
});

socket.on('game-start', (username) => {
  player.username = username;
  console.log(`Hello, ${player.username}`);
  console.log('Welcome to the game! We\'ll let you know when the next round starts.')
  rl.on('line', (input) => {
    if (input) {
      socket.emit('attempt', input, player.username);
    }
  });
});

socket.on('word-switch', (word) => {
  console.log('The word has changed!');
  console.log('The new word is -', word);
});

socket.on('success', (score) => {
  player.score = score;
  console.log('Win! Your score is now:', score);
});

/**
 * Should only be received if someone else wins.
 * So username should refer to a different user.
 */
socket.on('broadcast-success', (username) => {
  console.log(`${username} won this round!`);
});