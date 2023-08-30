const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');

const board = new five.Board({
  io: new RaspiIO()
});

board.on('ready', () => {
  // Create a Motor instance for the DC motor
  const motor = new five.Motor({
    pins: {
      pwm: 'P1-7',   // PWMピン（速度制御）
      dir: 'P1-11'   // 方向制御ピン
    },
    invertPWM: true  // PWMを反転（必要に応じて）
  });

  // Forward with a fixed speed
  motor.forward(100);  // 255は速度の範囲（0から255）
});
