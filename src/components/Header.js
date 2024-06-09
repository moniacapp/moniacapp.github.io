import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import appImage from '../assets/app-icon.png';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <Link className="logo" to="/">
          <img className="logo-icon" src={appImage} alt="MONIAC" />
          <div className="logo-title">MONIAC</div>
        </Link>
        
        <nav>
          <ul>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul> 
        </nav>
      </div>
    );
  }
}

export default Header;
