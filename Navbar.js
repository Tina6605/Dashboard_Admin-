// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="navbar-right">
        <span>Notifications</span>
        <span>User</span>
      </div>
    </div>
  );
};

export default Navbar;
