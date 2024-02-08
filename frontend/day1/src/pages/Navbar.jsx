<<<<<<< HEAD
// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="left">
        <button onClick={toggleSidebar} className="menu-btn">
          Menu
        </button>
      </div>
      <div className="center">
        <div className="title">Welcome! to ZenVista yoga</div>
        <div className="subtitle">Start your yoga journey with us!</div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Navbar;
=======
// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="left">
        <button onClick={toggleSidebar} className="menu-btn">
          Menu
        </button>
      </div>
      <div className="center">
        <div className="title">Welcome! to ZenVista yoga</div>
        <div className="subtitle">Start your yoga journey with us!</div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Navbar;
>>>>>>> ee95a7b5ddd4d03b66daaf354fe62178931e0b79
