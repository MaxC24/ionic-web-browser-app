## iPhone Web Browser App ##

This is my first Ionic mobile app.

First of all do "bower install" and "npm install" in the terminal.

There is a seed file that will add two urls documents in the Database: "http://www.google.com" and "http://www.galapro.com". Run this command in the terminal: "npm run seed".

To run the app in the computer web browser use the command "ionic serve" in the terminal.

It's possible to run the app in the Xcode emulator for Iphone, but it won't be able to connect to the "localhost" address, so __it needs to be changed in the file www/js/factory.js to the local machine IP or it won't be able to connect to the server with the sockets.__ in the real world you would have a deployed server where the app would connect to.

If the address is changed in the Angular factory then to run the app in the emulator use these commands in the terminal:

* ionic build ios
* ionic emulate ios

Thank you for checking my app.