const ArduinoBoard = require('serialport');

const Readline = ArduinoBoard.parsers.Readline;

// Be careful with Windows Hosts
const port = new ArduinoBoard('/dev/ttyACM0');

const parser = new Readline();

port.pipe(parser);

parser.on('data', (sensors) => {
  console.log("Received: " + sensors);
  var ldrValue = sensors.split(':');
  console.log("temperatura: " + ldrValue[0]);
})