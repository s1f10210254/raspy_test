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
  board.repl.inject({
    motor
  });

  motor.on("start", ()=>{
    console.log(`start: ${Date.now()}`);

    board.wait(2000, motor.stop);
  })

  motor.on("stop",()=>{
    console.log(`stop: ${Date.now()}`);
  })


  motor.start();
});
