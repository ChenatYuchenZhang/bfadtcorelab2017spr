#Tutorial for listing Serial ports
This tutorial is base on ITP Node SerialPort tutorial [here] (https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/).


##Check your node nad npm versions first:
1. check your node version by typing: `node -v`. If you installed it correctly, you’ll get a version number like 0.12.7. The node installer should also install the node package manager (npm).
2. Check your npm version by typing: ` npm -v`.

##Test your node modules to see if that is working:
1. Make a new directory for your code and create a `index.js` file
2. Inside your `index.js` file add a line to print "hellow, and welcome to node." into the console.
`console.log("Hello, and welcome to node.");`
3. test your file by running `node index.js` in your terminal. Your terminal should print out your line.

## The Node Serialport Libary
1. You’ll also need the node serialport library, which you can install from the npm registry like so first in terminal install serialport by typing `npm install serialport`. This command will make a new subdirectory called node_modules, and in that directory it will install all the necessary assets for the serialport library.  This will create the node_modules directory in your current directory(if one doesn't exist yet), and will download the package to that directory.
2. The first thing you’ll want is a list of the serial ports. Replace the text of your program file with the following:
```
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});
```
3. Run this script in your terminal by typing `node index.js`.When you run this script, you’ll get a list of your serial ports like so:
```
/dev/cu.Bluetooth-Incoming-Port
/dev/cu.Bluetooth-Modem
/dev/cu.usbmodem1411
```
If you’ve got an Arduino plugged in via USB, you should see the name of your board’s port there as well. In the example above, which was run on OSX, the Arduino’s port is /dev/cu.usbmodem1411.

#Tutorial for Connecting Serial Communication to Console
1. keep your files from the listing serial monitors files. Add the following code into index.js file.
```
var port = new SerialPort('/dev/cu.usbmodem1411', {
  parser: SerialPort.parsers.readline('\n')
});

port.on('data', function (data) {
  console.log('Data: ' + data);
});
```
