const express = require('express');
const {Server} = require('http');
const app = express();
const server = Server(app);
const socket = require('./socket');
const PORT = 8080;

require('./middlewares/public')(app);
socket.attach(server);
server.listen(PORT);
console.info(`Listening on http://localhost:${PORT}`);
