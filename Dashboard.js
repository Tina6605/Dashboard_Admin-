// Dashboard.js
import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <div className="card sales">
          <h3>Weekly Sales</h3>
          <p>5,82,000</p>
          <span>Increased by 60%</span>
        </div>
        <div className="card orders">
          <h3>Weekly Orders</h3>
          <p>45,634</p>
          <span>Decreased by 10%</span>
        </div>
        <div className="card visitors">
          <h3>Visitors Online</h3>
          <p>95,574</p>
          <span>Increased by 5%</span>
        </div>
      </div>
      <div className="dashboard-stats">
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Average Order Value: ₹2,500</p>
          <p>Total Orders: 45,634</p>
          <p>Orders Pending: 1,234</p>
        </div>
        <div className="sales-report">
          <h3>Sales Report</h3>
          <p>Total Sales: ₹5,82,000</p>
          <p>Sales by Category:</p>
          <ul>
            <li>Electronics: ₹2,00,000</li>
            <li>Fashion: ₹1,50,000</li>
            <li>Home Appliances: ₹1,32,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;