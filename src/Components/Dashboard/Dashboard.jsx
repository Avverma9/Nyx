import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const isDashboardPath = location.pathname === "/dashboard";

  return (
    <>
      {isDashboardPath && (
        <div className="dashboard-containers">
          <h1>Dashboard</h1>
          <div className="ledger-containers">
            <h2>Ledger Operations</h2>
            <ul>
              <li><Link to="/homepage">Add Ledger</Link></li>
              <li><Link to="/update">Update Ledger</Link></li>
              <li><Link to="/get">Get Ledger</Link></li>
              <li><Link to="/delete">Delete Ledger</Link></li>
            </ul>
          </div>
          <div className="card-container">
            {/* Render your card components here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
