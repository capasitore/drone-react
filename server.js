const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Mambo = require('parrot-minidrone');

const config = require('./config');

server.listen(3001);

app.get('/', (req, res) => {
  res.json({ status: 'listening' });
});

let connected = false;
const drone = new Mambo({
  droneFilter: config.droneName,
  autoconnect: true,
});

drone.on('connected', () => {
  connected = true
});

io.on('connection', (socket) => {
  let timeout = null;

  const inputSensitivity = 70;

  if (timeout) {
    clearTimeout(timeout);
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

  if (connected) socket.emit('connected');
  else drone.on('connected', () => socket.emit('connected'));

  drone.on('batteryStatusChange', level => socket.emit('batteryStatusChange', level));
  drone.on('flightStatusChange', obj => socket.emit('flightStatusChange', obj));

  socket.on('takeoffOrLand', () => {
    console.log('takeoffOrLand');
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
  
  socket.on('animate', method => {
    console.log('animating', method);
    drone.animate(method);
  });

  socket.on('emergency', () => {
    console.log('emergency land');
    drone.emergency();
  });
});
