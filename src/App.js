import React, { Component } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    );
  }
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <Link to="/about">About</Link>
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;