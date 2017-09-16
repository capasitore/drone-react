import React, { Component } from 'react';
import Socket from 'socket.io-client';
import './App.css';
import logo from './parrot.svg';

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

    console.log('emergency()');
    socket.emit('emergency');
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          Parrot Mini-Drone Controller
        </div>
        <div className="controller">
          <div className="joypad joypad-left">
            <div className="handle_left"></div>
            <div className="handle_right"></div>
            <div className="handle_bottom"></div>
            <div className="cover">
              <button className="control_button control_button-up" onClick={this.move.bind(null, 'forward')}></button>
              <button className="control_button control_button-right" onClick={this.move.bind(null, 'right')}></button>
              <button className="control_button control_button-down" onClick={this.move.bind(null, 'backward')}></button>
              <button className="control_button control_button-left" onClick={this.move.bind(null, 'left')}></button>
            </div>
          </div>
          <div className="joypad joypad-right">
            <div className="handle_left"></div>
            <div className="handle_right"></div>
            <div className="handle_bottom"></div>
            <div className="cover">
              <button className="control_button control_button-up" onClick={this.turn.bind(null, 'up')}></button>
              <button className="control_button control_button-right" onClick={this.turn.bind(null, 'right')}></button>
              <button className="control_button control_button-down" onClick={this.turn.bind(null, 'down')}></button>
              <button className="control_button control_button-left" onClick={this.turn.bind(null, 'left')}></button>
            </div>
          </div>
          <div className="joypad-mid">
            <img src={logo} className="logo" alt="" />
            <div className="actions">
              <button className="action_button" onClick={this.takeoff}>TakeOff</button>
              <button className="action_button action_button-red" onClick={this.emergency}>Stop</button>
            </div>
          </div>
          <div className="wire"></div>
        </div>
      </div>
    );
  }
}

export default App;
