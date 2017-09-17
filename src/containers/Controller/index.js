import React from 'react';
import './styles.css';
import logo from './parrot.svg';

import ControlButton from '../../components/ControlButton';
import ActionButton from '../../components/ActionButton';

const Controller = ({move, turn, takeoff, emergency}) => {
  return (
    <div className="controller">
      <div className="joypad joypad-left">
        <div className="cover">
          <ControlButton action={move} direction="up" />
          <ControlButton action={move} direction="right" />
          <ControlButton action={move} direction="down" />
          <ControlButton action={move} direction="left" />
        </div>
      </div>
      <div className="joypad-mid">
        <img src={logo} className="logo" alt="" />
        <div className="actions">
          <ActionButton action={takeoff} label="TakeOff" />
          <ActionButton action={emergency} label="Stop" />
        </div>
      </div>
      <div className="joypad joypad-right">
        <div className="cover">
          <ControlButton action={turn} direction="up" />
          <ControlButton action={turn} direction="right" />
          <ControlButton action={turn} direction="down" />
          <ControlButton action={turn} direction="left" />
        </div>
      </div>
    </div>
  );
};

export default Controller;
