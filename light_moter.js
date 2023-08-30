const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');

const board = new five.Board({
  io: new RaspiIO()
});

board.on('ready', () => {
  // Create a Servo on pin 7 on header P1 (GPIO4)
  const servo = new five.Servo({
    pin: 'P1-11'
  });

  // Move the servo to a specific angle
  servo.to(90); // Adjust the angle (0 to 180) as needed
});


const board1 = new five.Board({
  io: new RaspiIO()
});

board1.on('ready', () => {
  // Create an Led on pin 11 on header P1 (GPIO17) and strobe it on/off
  const led = new five.Led('P1-7');
  led.strobe(500);
});
