const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const startDb = require('./db');

io.on('connection', function(){
  console.log('user connected');
});

startDb.then(() => server.listen(PORT, () => console.log('listening on port: ', PORT)))
.catch(error => console.error(error));
