let ArduinoFirmata = require('arduino-firmata')
let log = require('./LogHandler')

log.info("[ArduinoHandler@]: Initializing")
var OS = require('os');
var isWindows = OS.platform().includes('win32') || OS.platform().includes('win64')

let arduino = new ArduinoFirmata()

arduino.connect() // use default arduino
arduino.connect((isWindows ? 'COM4' : '/dev/ttyACM0'))

arduino.on('connect', function(){

  log.info("[ArduinoHandler@]: board version" + arduino.boardVersion)
  log.info("[ArduinoHandler@]: " + arduino)

})

log.info("[ArduinoHandler@]: Initialized")

exports.module = arduino