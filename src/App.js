import React, { Component } from 'react';
import Socket from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const socket = Socket('http://localhost:3001');

class App extends Component {
  constructor() {
    super();

    // Bindings
    this.takeoff = this.takeoff.bind(this);
    this.land = this.land.bind(this);
    this.turn = this.turn.bind(this);
    this.emergency = this.emergency.bind(this);
  }

  takeoff(e) {
    if (e) e.preventDefault();

    console.log('takeoff()');
    socket.emit('takeoff');
  }

  land(e) {
    if (e) e.preventDefault();

    console.log('land()');
    socket.emit('land');
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
    socket.emit('emergency');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Drone-React</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.takeoff}>Takeoff</button>
        </p>
      </div>
    );
  }
}

export default App;
