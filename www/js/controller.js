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

  $scope.find = function(){
    var url = $scope.url ? parseUrl($scope.url) : "http://www.google.com";
    socket.emit('sendUrl', {url : url});
  };

  socket.on('receivedUrl', function(foundUrl){
    $scope.notFound = $scope.found = null;
    if(foundUrl) $scope.found = foundUrl.url;
    else $scope.notFound = true;
  });

  $scope.connect = function(){
    $cordovaInAppBrowser.open($scope.found, 'blank', options)
    .then(function(event){
      console.log(event);
    })
    .catch(console.error.bind(console));
  }

});
