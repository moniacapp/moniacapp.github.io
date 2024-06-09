import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import './Home.css';
import download_from_appstore from '../assets/download-on-app-store.png';
import add_expense from '../assets/add-expense.png';

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
              <a href="https://apps.apple.com/app/moniac/id1639349518" target="_blank" rel="noopener noreferrer">
                <img src={download_from_appstore} alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <div className="image-container">
            <img src={add_expense} alt="App on Phone" />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
