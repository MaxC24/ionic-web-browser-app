app.controller('BrowserCtrl', function($scope, $cordovaInAppBrowser, socket) {

  var options = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'yes'
  };

  //A function that validates the url.
  function parseUrl(url) {
    url = url.toLowerCase();
    var httpStr = 'http://';
    var www = 'www.';
    var httpReg = /^https?:\/\//;
    var wwwReg = new RegExp(www);
    if(!httpReg.test(url) && wwwReg.test(url)) url = httpStr + url;
    else if(!httpReg.test(url) && !wwwReg.test(url)) url = httpStr + www + url;
    return url;
  }

  $scope.open = function(){
    var url = $scope.url ? parseUrl($scope.url) : "http://www.google.com";
    socket.emit('sendUrl', {url : url});
  };

 socket.on('receivedUrl', function(foundUrl){
    console.log('foundUrl: ', foundUrl);
    $cordovaInAppBrowser.open(foundUrl.url ? foundUrl.url : "http://www.google.com", 'blank', options)
    .then(function(event){
      console.log(event);
    })
    .catch(console.error.bind(console));
  });

});
