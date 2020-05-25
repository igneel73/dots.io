/**
 * Filename: server.js
 * Description: Initializes the express server
 */

const app = require('express')();
const http = require('http').createServer(app);
const config = require('./config/config');
const io = require('socket.io')(http);

// Route Definitions
app.get('/', (req, res) => res.sendFile(__dirname + '/static/html/index.html'));

// Socket Definitions
io.on('connection', (socket) => {
  console.log('A User Connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// Run server
http.listen(config.PORT, () =>
  console.log(`Example app listening at http://localhost:${config.PORT}`)
);
