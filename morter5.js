const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new RaspiIO()
});

board.on('ready', () => {
  // モーターのPWMピン設定
  const motor = new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-11'
    }
  });
  console.log("speed")

  // モーターを正回転
  motor.forward(100);
  console.log("mootor_forward")

  // 5秒後にモーター停止
  setTimeout(() => {
    motor.stop();
    console.log("moter_stop")
    process.exit();
  }, 5000);
});
