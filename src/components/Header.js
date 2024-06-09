import React, { Component } from 'react';
import './Header.css';
import appImage from '../assets/app-icon.png';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <a className="logo" href="/">
          <img className="logo-icon" src={appImage} alt="MONIAC" />
          <div className="logo-title">MONIAC</div>
        </a>
        
        <nav>
          <ul>
            <li><a href="contact-us">Contact Us</a></li>
          </ul> 
        </nav>
      </div>
    );
  }
}

export default Header;
