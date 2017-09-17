import React, { Component } from 'react';
import Socket from 'socket.io-client';

import Header from './components/Header';
import Footer from './components/Footer';
import Controller from './components/Controller';

import './App.css';

const socket = Socket('http://localhost:3001');
class App extends Component {
  constructor() {
    super();

    // state
    this.state = {
      connected: false,
      batteryLevel: 100,
      flightStatus: 'landed'
    };
  }

  componentDidMount() {
    socket.on('connected', () => {
      this.setState({ connected: true });
      console.log('connected');
    });

    socket.on('batteryStatusChange', level => {
      this.setState({ batteryLevel: level });
      console.log('Battery Level', level);
    });
    
    socket.on('flightStatusChange', status => {
      this.setState({ flightStatus: status });
      console.log('isFlying', status);
    });
  }

  takeoff(e) {
    if (e) e.preventDefault();

    console.log('takeoff()');
    socket.emit('takeoff');
  }

  move(direction, e) {
    if (e) e.preventDefault();

    console.log('move()', direction);
    socket.emit('move', direction);
  }

  turn(direction, e) {
    if (e) e.preventDefault();

    console.log('turn()', direction);
    socket.emit('turn', direction);
  }

  emergency(e) {
    if (e) e.preventDefault();

    console.log('emergency()');
    socket.emit('emergency');
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Controller
          move={this.move}
          turn={this.turn}
          takeoff={this.takeoff}
          emergency={this.emergency}
          connected={this.state.connected}
          batteryLevel={this.state.batteryLevel}
          flightStatus={this.state.flightStatus}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
