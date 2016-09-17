## iPhone Web Browser App ##

First of all do "bower install" and "npm install" in the terminal.

To run the app in the computer web browser use the command "ionic serve" in the terminal.

It's possible to run the app in the Xcode emulator for Iphone, but it won't be able to connect to the "localhost" address, so __it needs to be changed in the file www/js/factory.js to the local machine IP or it won't be able to connect to the server with the sockets.__ in the real world you would have a deployed server where the app would connect to.


