// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1>Welcome to AI Agent Marketplace</h1>
        <p>Find the perfect AI agent for your tasks or share your own creations</p>
        <div className="cta-buttons">
          <Link to="/marketplace">
            <button className="btn-primary">Explore Marketplace</button>
          </Link>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
      
      <div className="feature-grid">
        <div className="feature-card">
          <h3>Find AI Agents</h3>
          <p>Discover the perfect AI solutions for your specific needs</p>
        </div>
        <div className="feature-card">
          <h3>Share Your Creations</h3>
          <p>Upload and monetize your own AI agents</p>
        </div>
        <div className="feature-card">
          <h3>Join the Community</h3>
          <p>Connect with other AI enthusiasts and developers</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;