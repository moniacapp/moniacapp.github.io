import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main-section">
          <div className="content">
            <h1>Track the finances in your phone</h1>
            <p>Download free and easily app clicking on the button at the bottom</p>
            <div className="buttons">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="https://link-to-your-app-store-badge" alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="https://link-to-your-google-play-badge" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="image-container">
            <img src='' alt="App on Phone" />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
