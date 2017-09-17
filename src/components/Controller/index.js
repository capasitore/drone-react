import React from 'react';
import './styles.css';
import logo from './parrot.svg';

import ControlButton from '../ControlButton';
import ActionButton from '../ActionButton';

const Controller = ({move, turn, takeoff, emergency}) => {
  return (
    <div className="controller">
      <div className="joypad">
        <ControlButton action={move} direction="up" />
        <ControlButton action={move} direction="right" />
        <ControlButton action={move} direction="down" />
        <ControlButton action={move} direction="left" />
      </div>
      <div className="joypad-mid">
        <img src={logo} className="logo" alt="" />
        <div>
          <ActionButton action={takeoff} label="TakeOff" />
          <ActionButton action={emergency} label="Stop" />
        </div>
      </div>
      <div className="joypad">
        <ControlButton action={turn} direction="up" />
        <ControlButton action={turn} direction="right" />
        <ControlButton action={turn} direction="down" />
        <ControlButton action={turn} direction="left" />
      </div>
    </div>
  );
};

export default Controller;
