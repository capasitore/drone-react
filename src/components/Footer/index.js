import React from 'react';
import './styles.css';
import logo from './logo.svg';

const Tagline = () => {
  return (
    <div className="footer">
      Built and designed by <a href="http://www.robbg.io">Rob BG</a> using React / Socket.io.&nbsp;
      <a href="https://github.com/robertbg/drone-react">Source code on Github</a>.
      <img className="footer_logo" src={logo} alt="RBG Digital Ltd. Logo" />
    </div>
  );
};

export default Tagline;
