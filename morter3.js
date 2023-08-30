const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');
var board = new five.Board({
  io: new RaspiIO()
});

board.on("ready", function() {
  // モータードライバのピン設定（例）
  const motorPins = {
    pwm: 'P1-26',    // PWM信号
    dir: 'P1-24'     // 方向制御
  };

  // モータードライバのピンを定義
  const motor = new five.Motor(motorPins);

  // モーターを動かす
  motor.forward(255); // 255はPWM値で、速度を表す（0から255までの範囲）
});



