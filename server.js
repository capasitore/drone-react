const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Mambo = require('parrot-minidrone');

const config = require('./config');

server.listen(3001);

app.get('/', (req, res) => {
  res.json({ status: 'listening' });
});

const drone = new Mambo({
  droneFilter: config.droneName,
  autoconnect: true,
});

io.on('connection', (socket) => {
  let timeout = null;

  const inputSensitivity = 70;

  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  const flightParams = {
    yaw: 0,
    pitch: 0,
    roll: 0,
    altitude: 0,
  };

  const action = () => {
    drone.setFlightParams(flightParams);
    timeout = setTimeout(() => {
      drone.setFlightParams({
        yaw: 0,
        pitch: 0,
        roll: 0,
        altitude: 0,
      });
    }, 400);
  }

  socket.on('takeoff', () => {
    console.log('takeoff');
    drone.takeoffOrLand();
  });

  socket.on('land', () => {
    console.log('land');
    drone.takeoffOrLand();
  });

  socket.on('move', (direction) => {
    console.log(`moving ${direction}`);
    switch (direction) {
      case 'forward':
        flightParams.pitch = inputSensitivity;
        break;
      case 'backward':
        flightParams.pitch = -inputSensitivity;
        break;
      case 'left':
        flightParams.roll = -inputSensitivity;
        break;
      case 'right':
        flightParams.roll = inputSensitivity;
        break;
      default:
        break;
    }
    action();
  });

  socket.on('turn', (direction) => {
    console.log(`turning ${direction}`);
    switch (direction) {
      case 'up':
        flightParams.altitude = inputSensitivity;
        break;
      case 'down':
        flightParams.altitude = -inputSensitivity;
        break;
      case 'left':
        flightParams.yaw = -inputSensitivity;
        break;
      case 'right':
        flightParams.yaw = inputSensitivity;
        break;
      default:
        break;
    }
    action();
  });

  socket.on('trim', () => {
    console.log('flat trim');
    drone.trim();
  });

  socket.on('emergency', () => {
    console.log('emergency land');
    drone.emergency();
  });
});
