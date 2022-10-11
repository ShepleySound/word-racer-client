# Word Racer - Client

This repository hosts the source code for the Word Racer client application.  

Word Racer is a CLI-based typing game created using Socket.IO. The server randomly chooses from a pre-defined list of words and emits the new word to all connected clients. If a client responds with the correct word before the timer runs out, they win the round and earn a point. A new word is chosen when the timer runs out or when someone wins the round.

Once connected, the client will first ask for a name. Once a name is provided, the game will start, and the player will receive a notification each time the round changes. To win the round, the player must type the word before another player, or before the server sends a new word.

Author: [Robert Shepley](https://github.com/shepleysound), [Timothee Odushina](https://github.com/timothee2022)
<!-- Replace URL's and add more necessary links -->
<!-- - [Tests Report]()
- [Assignment Pull Request]()
- [Heroku Prod Deployment]() -->

## Documentation

### Running the application locally

To install/run the application, you will need to have Node.js and npm installed. For directions, please reference the [npm documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Clone the repository to your local machine
- Create a file called `.env` in the cloned directory and fill it with the following lines -

  ```text
    SERVER_URL=http://word-racer-v2-dev.us-west-2.elasticbeanstalk.com
  ```

- Run the following commands in your terminal -

  ```bash
    npm install
    node index.js
  ```

## Tests

*To be implemented*
<!-- - Unit Tests: `npm run test` -->

## Further Goals

- [ ] Implement tests
- [ ] Modularize client-side socket code

<!-- ## Structure Diagram -->
