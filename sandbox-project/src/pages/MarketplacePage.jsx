import React from 'react';

function MarketplacePage() {
  return (
    <div>
      <h1>AI Agent Marketplace</h1>
      
      <div className="search-filter-section">
        <input type="text" placeholder="Search for AI agents..." />
        <div className="filters">
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
        <p>No agents found matching your criteria.</p>
      </div>
    </div>
  );
}

export default MarketplacePage; 