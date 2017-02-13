var serialport = require('serialport');// include the library

   SerialPort = serialport.SerialPort; // make a local instance of it
   // get port name from the command line:
   portName = "/dev/cu.usbmodem1411";

var myPort = new SerialPort(portName, {
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\n")
 });

// send out establish contact to Arduino
myPort.on('open',function() {
  console.log("serial port is open");
});

myPort.on('data',function(data){
  console.log("here's data: "+data);
  //console.log(data);
});

myPort.on('close',function(){
  console.log("serial port is closed");
});

myPort.on('error',function(error){
  console.log("Serial port got error: "+error)
})
