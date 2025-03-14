// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="welcome-section">
        <h1>Welcome to AI Agent Finder</h1>
        <p>Discover the perfect AI agent for your needs or share your own creations</p>
        <div className="cta-buttons">
          <Link to="/marketplace" className="btn-primary">Explore Marketplace</Link>
          <Link to="/profile" className="btn-secondary">My Profile</Link>
        </div>
      </section>
      
      <section className="agent-categories">
        <div className="category-card">
          <h3>Productivity</h3>
          <p>Automate tasks and boost efficiency</p>
        </div>
        <div className="category-card">
          <h3>Creativity</h3>
          <p>Generate content and ideas</p>
        </div>
        <div className="category-card">
          <h3>Data Analysis</h3>
          <p>Process and visualize information</p>
        </div>
      </section>
      
      <section className="recent-agents">
        <h2>Recently Added Agents</h2>
        <div className="agent-grid">
          <div className="card">
            <h3>Assistant Pro</h3>
            <p>Multi-purpose productivity assistant</p>
          </div>
          <div className="card">
            <h3>Code Helper</h3>
            <p>AI programming assistant</p>
          </div>
          <div className="card">
            <h3>Data Visualizer</h3>
            <p>Transform your data into insights</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;