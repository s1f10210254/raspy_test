const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');
var board = new five.Board({
  io: new RaspiIO()
});

board.on("ready", function() {
  var led = new five.Led("P1-7");
  led.blink(500);
});
