import React, { Component } from 'react';

class AppStoreButton extends Component {
  render() {
    return (
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <button>Download from App Store</button>
      </a>
    );
  }
}

export default AppStoreButton;