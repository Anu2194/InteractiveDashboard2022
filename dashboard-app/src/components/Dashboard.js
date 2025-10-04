import React from 'react';
import './Dashboard.css';
import Profile from './Profile';

function Dashboard() {
  return (
    <div className="dashboard-holy-grail" data-testid="dashboard">
      <header className="dg-header">This is My Dashboard</header>
      <nav className="dg-nav">Left navigation<br />- Link A<br />- Link B</nav>
      <main className="dg-main">
        <h2>Main content</h2>
        <p>Put your charts, widgets and visualizations here.</p>
      </main>
  <aside className="dg-aside"><Profile /></aside>
      <footer className="dg-footer">© 2025 My Dashboard</footer>
    </div>
  );
}

export default Dashboard;
