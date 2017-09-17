import React from 'react';
import './styles.css';

const ControlButton = ({ action, direction }) => {
  const classes = `control_button control_button-${direction}`
  return (
    <button className={classes} onClick={action.bind(null, direction)}></button>
  )
};

export default ControlButton;
