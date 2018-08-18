import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import '../css/style.css';


const Topbar = (props) => (
  <Router>
    <div className="nav-wrapper">
      <div className="row">
        <div className="col s4">
          <Link to="/">
            <h1 className="topbar">Clicky Monkey</h1>
          </Link>
        </div>

        <div className="col s4">
          <h1 className="topbar">{props.message}</h1>
        </div>
        <div className="col s4">
          <h1 className="topbar">Score: {props.theScore} | Top Score: {props.topScore} </h1>
        </div>
      </div>
    </div>
  </Router>

);

export default Topbar;
