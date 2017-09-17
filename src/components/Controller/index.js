import React from 'react';
import './styles.css';

import logo from './drone.svg';

import ControlButton from '../ControlButton';
import ActionButton from '../ActionButton';

const Controller = ({move, turn, takeoff, emergency}) => {
  return (
    <div className="controller">
      <div className="joypad">
        <ControlButton action={turn} direction="up" icon="fa-arrow-up" />
        <ControlButton action={turn} direction="right" icon="fa-repeat" />
        <ControlButton action={turn} direction="down" icon="fa-arrow-down" />
        <ControlButton action={turn} direction="left" icon="fa-undo" />
      </div>
      <div className="joypad-mid">
        <img src={logo} className="logo" alt="" />
        <div>
          <ActionButton action={takeoff} label="Take-Off" />
          <ActionButton action={emergency} label="Stop" />
        </div>
      </div>
      <div className="joypad">
        <ControlButton action={move} direction="forward" icon="fa-caret-up" />
        <ControlButton action={move} direction="right" icon="fa-caret-right" />
        <ControlButton action={move} direction="backward" icon="fa-caret-down" />
        <ControlButton action={move} direction="left" icon="fa-caret-left" />
      </div>
    </div>
  );
};

export default Controller;
