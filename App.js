// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
