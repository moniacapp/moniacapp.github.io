import React, { Component } from 'react';
import Header from '../components/Header';

class NotFound extends Component {

  render() {
    return (
      <div>
        <Header />
        <p>
          404 Not Found
        </p>
      </div>
    );
  }
}
  
export default NotFound;