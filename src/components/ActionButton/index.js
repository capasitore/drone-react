import React from 'react';
import './styles.css';

const ActionButton = ({ action, label }) => <button className="action_button" onClick={action}>{label}</button>;

export default ActionButton;
