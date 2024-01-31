// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/applogo3.jpg'; // Replace with the correct path to your logo image
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="left">
          <span className="menu-icon" onClick={toggleSidebar}>
            ☰
          </span>
          {showSidebar && (
            <div className="sidebar">
              <ul>
                <li><Link to="/album">Yoga</Link></li>
                <li><Link to="/book-admissions">Book Admissions</Link></li>
                <li><Link to="/faq">FAQ's</Link></li>
                <li><Link to="/trainer">Our Trainers</Link></li>
                <li><Link to="/my-profile">My Profile</Link></li>
                {/* Add more sidebar items as needed */}
              </ul>
            </div>
          )}
        </div>

        <div className="middle">
          <img src={logo} alt="Company Logo" className="company-logo" />
          <h1>Welcome! to ZenVista Yoga</h1>
          <p>Start your yoga journey with us!</p>
        </div>

        <div className="right">
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
