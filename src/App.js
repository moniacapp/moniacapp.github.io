import React, { Component } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;