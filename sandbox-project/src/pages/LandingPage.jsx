// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase-config';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

function LandingPage() {
  const { currentUser } = useAuth();

  // Logged‑in view for returning users
  const LoggedInView = () => (
    <>
      <div className="hero logged-in">
        <h1>Welcome back, {currentUser.displayName}!</h1>
        <p className="hero-subtitle">Ready to explore more AI agents today?</p>
        
        <div className="user-dashboard-preview">
          <div className="user-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.25-14.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zm0 10.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zM2.5 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2.5 8zm10.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h4>3</h4>
                <p>Agents Owned</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h4>28</h4>
                <p>Total Runs</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.5 7.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h.5Zm0 2a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h.5Zm2.5-2a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h1Zm0 2a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h1Zm2.5-2a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1h1Zm0 2a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1h1Zm2.5-2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm0 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM12 9.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h4>2</h4>
                <p>Agents Created</p>
              </div>
            </div>
          </div>
          
          <div className="quick-actions">
            <Link to="/home">
              <button className="btn-primary">Go to Dashboard</button>
            </Link>
            <Link to="/marketplace">
              <button className="btn-secondary">Browse Marketplace</button>
            </Link>
          </div>
          
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-title">Ran "Data Analyzer" agent</p>
                  <p className="activity-time">2 hours ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                </div>
                <div className="activity-content">
                  <p className="activity-title">Downloaded "Content Creator" agent</p>
                  <p className="activity-time">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="suggested-agents">
        <h3>Recommended for You</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M9.5 2.672a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm4.5.5a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm-.5 9.326a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm-4 0a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm-5-3.701a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm.5-4.625a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5cM7 6.5C7 8.11 8.01 9 9.5 9S12 8.11 12 6.5a3.5 3.5 0 0 0-7 0z"/>
              </svg>
            </div>
            <h3>Meeting Assistant Pro</h3>
            <p>Takes meeting notes and creates action items automatically</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13zM1 13a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1V8h1.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4h-2.5a1 1 0 0 0-1 1v.9H9v-.9a1 1 0 0 0-1-1H5.5a1 1 0 0 0-.8.4L2.725 5.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h1.5v5z"/>
              </svg>
            </div>
            <h3>Content Scheduler</h3>
            <p>Plan and schedule your content across all platforms</p>
          </div>
        </div>
      </div>
    </>
  );

  // Guest view for new users
  const GuestView = () => (
    <>
      <div className="hero">
        <h1>Welcome to Agentory</h1>
        <p className="hero-subtitle">
          Your marketplace for advanced AI agents that transform the way you work
        </p>
        
        <div className="cta-section">
          <div className="auth-options">
            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Get Started Today</h3>
              
              <button
                type="button"
                className="btn-primary signup-btn"
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Discover the Power of AI Agents</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
              </svg>
            </div>
            <h3>Save Time</h3>
            <p>Automate repetitive tasks and focus on what matters most</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </div>
            <h3>Customize</h3>
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
    </>
  );

  return (
    <div className="landing-page">
      {currentUser ? <LoggedInView /> : <GuestView />}
      
      {!currentUser && (
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
      )}
      
      {!currentUser && (
        <div className="call-to-action">
          <h2>Ready to get started?</h2>
          <p>Join thousands of users already leveraging the power of AI agents</p>
          <button
            className="btn-primary cta-button"
            onClick={signInWithGoogle}
          >
            Sign Up Now
          </button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
