app.factory('socket', function (socketFactory){
  console.dir(socketFactory);
  return socketFactory({
    ioSocket: io.connect("localhost:3000")
  });
});
