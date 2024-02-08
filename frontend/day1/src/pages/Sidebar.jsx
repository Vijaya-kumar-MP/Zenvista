<<<<<<< HEAD
// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'D:/zenvista/frontend/src/assets/css/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="close-btn">
        Close Sidebar
      </button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
=======
// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'D:/zenvista/frontend/src/assets/css/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="close-btn">
        Close Sidebar
      </button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
>>>>>>> ee95a7b5ddd4d03b66daaf354fe62178931e0b79
