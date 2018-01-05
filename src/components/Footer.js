import React from "react";

const iconstyle = {
  height: 30,
  marginLeft: 10
}

const Footer = () => (
  <div>
    <div className="prefooter"></div>
    <footer className="footer">
      Clicky Monkey
      <img alt="react" style={iconstyle} src={require('../css/images/react.svg')}></img>
    </footer>
  </div>

);

export default Footer;
