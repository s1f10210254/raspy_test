const { RaspiIO } = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new RaspiIO()
});

// PWMパラメータ
let duty = 0; // デューティー比を%で指定
const freq = 100; // PWM周波数をHzで指定
let upFlag = true;

board.on('ready', () => {
  // モーターのPWMピン設定
  const motor = new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-11',
      cdir: 'P1-15'
    }
    
  });
  motor.forward(100)

  // モーターを駆動
  board.loop(50, () => {
    // デューティサイクル計算
    const cnvDutycycle = Math.floor(duty * 1000000 / 100);
    
    // PWMを出力
    motor.pwm.write(cnvDutycycle);
    
    // dutyを変更
    if (upFlag) {
      if (duty === 100) {
        upFlag = false;
      } else {
        duty += 1;
      }
    } else {
      if (duty === 0) {
        upFlag = true;
      } else {
        duty -= 1;
      }
    }
  });
});
