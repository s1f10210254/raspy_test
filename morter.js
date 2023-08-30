const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');
var board = new five.Board({io: new RaspiIO()});

board.on("ready", function() {
  var servo = new five.Servo({
    pin: 'P1-7',
    pwmRange:[600, 2200]
  });
  this.repl.inject({
    servo: servo
  });

  servo.sweep();
});