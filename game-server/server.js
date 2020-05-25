/**
 * Filename: server.js
 * Description: Initializes the express server
 */

// imports
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const index = require('./routes/index');
const config = require('./config/config');

// Route Definitions
const app = express();
app.use(index);

// Server initialisation
const server = http.createServer(app);
const io = socketIo(server);

// Socket Definitions
io.on('connection', (socket) => {
  console.log('A User Connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// Run server
server.listen(config.PORT, () =>
  console.log(`Example app listening at http://localhost:${config.PORT}`)
);
