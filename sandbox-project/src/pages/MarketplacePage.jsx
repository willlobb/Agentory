// src/pages/MarketplacePage.jsx
import React from 'react';
import './MarketplacePage.css';

function MarketplacePage() {
  return (
    <div className="marketplace-page">
      <div className="marketplace-header">
        <h1>AI Agent Marketplace</h1>
      </div>
      
      <div className="filters-section">
        <div className="search-bar">
          <input type="text" placeholder="Search for AI agents..." />
        </div>
        <div className="filter-options">
          <select>
            <option value="">Category</option>
            <option value="productivity">Productivity</option>
            <option value="creative">Creative</option>
            <option value="data">Data Analysis</option>
            <option value="automation">Automation</option>
          </select>
          <select>
            <option value="">Price Range</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
            <option value="rental">Rental</option>
          </select>
        </div>
      </div>
      
      <div className="agents-grid">
        <div className="agent-card">
          <div className="agent-image"></div>
          <div className="agent-details">
            <h3 className="agent-title">Personal Assistant Pro</h3>
            <p className="agent-author">By: AI Solutions Inc.</p>
            <p className="agent-description">A comprehensive personal assistant for managing tasks and schedules</p>
            <div className="agent-footer">
              <span className="agent-price">$29.99</span>
              <button>View Details</button>
            </div>
          </div>
        </div>
        
        <div className="agent-card">
          <div className="agent-image"></div>
          <div className="agent-details">
            <h3 className="agent-title">Content Creator</h3>
            <p className="agent-author">By: Creative AI Labs</p>
            <p className="agent-description">Generate unique content for blogs, social media, and more</p>
            <div className="agent-footer">
              <span className="agent-price">$19.99</span>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pagination">
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
      </div>
    </div>
  );
}

export default MarketplacePage;