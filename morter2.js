const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new RaspiIO()
});

board.on('ready', () => {
  // Create a Servo on pin 7 on header P1 (GPIO4)
  const servo = new five.Motor({
    pin: 'P1-7'
  });

  // Move the servo to a specific angle
  servo.to(360); // Adjust the angle (0 to 180) as needed
});