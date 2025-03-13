// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Discover AI Agents for Every Task</h1>
        <p>Browse our collection of specialized AI agents or share your own creations with the world</p>
      </div>
      
      <div className="featured-section">
        <h2>Featured Agents</h2>
        <div className="featured-grid">
          <p>No featured agents available at the moment.</p>
        </div>
      </div>
      
      <div className="guides-section">
        <div className="guide-card">
          <h3>New to the Platform?</h3>
          <p>Learn how to find the perfect AI agent for your needs</p>
          <Link to="/marketplace">Explore Marketplace</Link>
        </div>
        
        <div className="guide-card">
          <h3>Create Your Profile</h3>
          <p>Sign up to save your preferences and track your activity</p>
          <Link to="/profile">Create Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
  