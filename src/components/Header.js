import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">FinApp</div>
        <nav>
          <ul>
            <li><a href="contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
