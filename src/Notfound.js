import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Notfound extends Component {
  render() {
    return (
      <div className="Notfound">
        <header className="Notfound-header">
          <img src={logo} className="Notfound-logo" alt="logo" />
          <p>
            asdadadasdasdasdassada
          </p>
          <a
            className="Notfound-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Notfound;
