const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const startDb = require('./db');
const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
const Url = mongoose.model('Url');

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('sendUrl', function(url){
    Url.findOne({url: url.url})
    .then(foundUrl => {
      console.log('foundUrl: ', foundUrl);
      socket.emit('receivedUrl', {url: foundUrl});
    })
    .catch(console.error.bind(console));
  });
});

startDb.then(() => server.listen(PORT, () => console.log('listening on port: ', PORT)))
.catch(error => console.error(error));
