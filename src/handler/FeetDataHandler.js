let arduinoInstance = require("./ArduinoHandler")

let feetProps = []

arduinoInstance.port.pipe(arduinoInstance.parser);

arduinoInstance.parser.on('data', (sensors) => {
  console.log("Received: " + sensors);
  var ldrValue = sensors.split(':');
  console.log("Intensity: " + ldrValue[0]);

  feetProps.push([0, 0, ldrValue])

  console.log(feetProps)
})

module.exports = feetProps