// Sidebar.js
import React from 'react';
import { FaHome, FaTable, FaChartBar, FaUser, FaCogs, FaSearch, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; // Make sure Sidebar.css is in the same directory

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://www.partysuppliesindia.com/cdn/shop/products/A1_49_8742dfc8-aa21-4955-bcb9-7e117d72f8cc.jpg?v=16191696678.jpg" // Placeholder profile image; replace with actual URL
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <span className="profile-name">Shinchan Nohara</span>
          <span className="profile-role">Project Manager</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search projects" />
      </div>

      {/* Sidebar Navigation Links */}
      <ul className="nav-links">
        <li><FaHome className="icon" /> Dashboard</li>
        <li><FaTable className="icon" /> Tables</li>
        <li><FaChartBar className="icon" /> Charts</li>
        <li><FaUser className="icon" /> User Pages</li>
        <li><FaCogs className="icon" /> Settings</li>
      </ul>

      {/* Footer Section with Notifications and Logout */}
      <div className="sidebar-footer">
        <FaBell className="footer-icon" title="Notifications" />
        <FaSignOutAlt className="footer-icon" title="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
