import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactUsLink extends Component {
  render() {
    return (
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    );
  }
}

export default ContactUsLink;
