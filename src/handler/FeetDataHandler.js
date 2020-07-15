let log = require('./LogHandler')
let arduino = require('./ArduinoHandler')

log.info("Handling with feetSensors")


exports.modules = arduino.on('analogChange', function(e) {
  log.info("pin" + e.pin + " : " + e.old_value + " -> " + e.value)
})