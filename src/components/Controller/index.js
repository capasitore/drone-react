import React from 'react';
import './styles.css';

import Drone from '../Drone';
import Battery from '../Battery';
import ControlButton from '../ControlButton';
import ActionButton from '../ActionButton';

const Controller = ({move, turn, takeoff, emergency, connected, batteryLevel, flightStatus}) => {
  let takeOffText = 'Take-Off';
  if (flightStatus !== 'landed') {
    takeOffText= 'Land';
  }
  return (
    <div className="controller">
      <div className="joypad">
        <ControlButton action={turn} direction="up" icon="fa-arrow-up" />
        <ControlButton action={turn} direction="right" icon="fa-repeat" />
        <ControlButton action={turn} direction="down" icon="fa-arrow-down" />
        <ControlButton action={turn} direction="left" icon="fa-undo" />
      </div>
      <div className="joypad-mid">
        <Drone connected={connected} />
        <Battery percent={batteryLevel} />
        <div>
          <ActionButton action={takeoff} label={takeOffText} />
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
