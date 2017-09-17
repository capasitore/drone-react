import React, { Component } from 'react';
import Socket from 'socket.io-client';

import Header from './components/Header';
import Footer from './components/Footer';
import Controller from './components/Controller';

import './App.css';

const socket = Socket('http://localhost:3001');
class App extends Component {
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
