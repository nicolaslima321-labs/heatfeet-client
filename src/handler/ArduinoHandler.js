import feetProps from './FeetDataHandler'

var OS = require('os');

var isWindows = OS.platform().includes('win32') || OS.platform().includes('win64')

const ArduinoBoard = require('serialport');

const Readline = ArduinoBoard.parsers.Readline;

// Be careful with Windows Hosts
const port = new ArduinoBoard((isWindows ? 'COM4' : '/dev/ttyACM0'));

const parser = new Readline();

port.pipe(parser);

parser.on('data', (sensors) => {
  console.log("Received: " + sensors);
  var ldrValue = sensors.split(':');
  console.log("Intensity: " + ldrValue[0]);

  feetProps.push({
    X: 0,
    y: 0,
    Intensity: ldrValue[0]
  })
  
})