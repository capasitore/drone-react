import React, { Component } from 'react';
import Socket from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const socket = Socket('http://localhost:3001');

class App extends Component {
  constructor() {
    super();

    // state
    this.state = {
      status: 'landed'
    };

    // Bindings
    this._changeStatus = this._changeStatus.bind(this);
    this._takeoff = this._takeoff.bind(this);
    this._land = this._land.bind(this);
    this._turn = this._turn.bind(this);
    this._emergency = this._emergency.bind(this);
  }

  componentDidMount() {
    socket.on('connected', () => {
      console.log('connected!');

      socket.on('didTakeoff', () => {
        console.log('did take off!');
        this._changeStatus('flying');
      });

      socket.on('didLand', () => {
        console.log('did land!');
        this._changeStatus('landed');
      });
    });
  }

 _changeStatus(status) {
    this.setState({
      status: status
    });
  }

  _takeoff(e) {
    if (e) e.preventDefault();

    console.log('_takeoff()');
    socket.emit('takeoff');
  }

  _land(e) {
    if (e) e.preventDefault();

    console.log('_land()');
    socket.emit('land');
  }

  _move(direction, e) {
    if (e) e.preventDefault();

    console.log('_move()', direction);
    socket.emit('move', direction);
  }

  _turn(direction, e) {
    if (e) e.preventDefault();

    console.log('_turn()', direction);
    socket.emit('turn', direction);
  }

  _emergency(e) {
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
          <button onClick={this._takeoff}>Takeoff</button>
        </p>
      </div>
    );
  }
}

export default App;
