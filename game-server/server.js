/**
 * Filename: server.js
 * Description: Initializes the express server
 */

const app = require('express')();
const config = require('./config/config');

// Route Definitions
app.get('/', (req, res) => res.send('Hello World!'));

// Run server
app.listen(config.PORT, () =>
  console.log(`Example app listening at http://localhost:${config.PORT}`)
);
