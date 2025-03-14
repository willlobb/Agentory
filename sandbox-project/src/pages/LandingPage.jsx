// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1>Welcome to Agentory</h1>
        <p className="hero-subtitle">Your marketplace for advanced AI agents that transform the way you work</p>
        
        <div className="cta-section">
          <div className="auth-options">
            <form className="signup-form">
              <h3>Get Started Today</h3>
              <div className="form-group">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" />
              </div>
              <button className="btn-primary signup-btn">Sign Up</button>
              <p className="login-text">Already have an account? <a href="#">Log in</a></p>
            </form>
          </div>
          
          <div className="or-divider">
            <span>OR</span>
          </div>
          
          <div className="guest-options">
            <Link to="/marketplace">
              <button className="btn-secondary">Browse as Guest</button>
            </Link>
            <Link to="/home">
              <button className="btn-outline">View Dashboard Demo</button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="benefits-section">
        <h2>Why Choose Agentory?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
              </svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Our AI agents are optimized for speed and efficiency, delivering results in seconds</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.25-14.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zm0 10.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zM2.5 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2.5 8zm10.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75zM4.258 4.258a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.258 5.318a.75.75 0 0 1 0-1.06zm7.424 7.424a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zM4.258 11.682a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0zm7.424-7.424a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0z"/>
              </svg>
            </div>
            <h3>Customizable</h3>
            <p>Tailor each agent to your specific needs with our intuitive customization tools</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.5 7.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h.5Zm0 2a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h.5Zm2.5-2a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h1Zm0 2a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h1Zm2.5-2a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1h1Zm0 2a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1h1Zm2.5-2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm0 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM12 9.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Z"/>
              </svg>
            </div>
            <h3>Earn Revenue</h3>
            <p>Create and sell your own AI agents to thousands of potential customers</p>
          </div>
        </div>
      </div>
      
      <div className="testimonial-section">
        <h2>Trusted by Innovators</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"Agentory completely transformed our workflow. Their agents saved us countless hours of manual work."</p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Sarah Chen</h4>
                <p>CTO, TechInnovate</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"The quality of AI agents on this platform is unmatched. We've integrated three of them into our business processes."</p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Michael Rodriguez</h4>
                <p>Product Manager, DataFlow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="call-to-action">
        <h2>Ready to get started?</h2>
        <p>Join thousands of users already leveraging the power of AI agents</p>
        <button className="btn-primary cta-button">Sign Up Now</button>
      </div>
    </div>
  );
}

export default LandingPage;