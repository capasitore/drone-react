import React from 'react';
import './styles.css';

const Icon = icon => <i className={`fa ${icon}`} aria-hidden="true"></i>

const ControlButton = ({ action, direction, icon }) => {
  const classes = `control_button control_button-${direction}`
  let buttonIcon = '';
  if (icon) buttonIcon = Icon(icon);

  return (
    <button className={classes} onClick={action.bind(null, direction)}>
      {buttonIcon}
    </button>
  )
};

export default ControlButton;
