const socketIO = require('socket.io');
const createPart = require('./mocks/partfactory');
const INTERVAL = 1 * 1000;
const CHANNEL = '/new_part';

const sendPart = (socket) => () => {
  const part = createPart();
  socket.send(part);
};

const onConnection = (socket) => {
  sendPart(socket)();
  const interval = setInterval(sendPart(socket), INTERVAL);
  socket.on('disconnect', clearInterval.bind(null, interval));
};

const attach = (server) => {
  const io = socketIO(server);
  io.of(CHANNEL) .on('connection', onConnection);
};

module.exports = {
  attach,
};
