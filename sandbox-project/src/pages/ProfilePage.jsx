// src/pages/ProfilePage.jsx
import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-picture"></div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>john@example.com</p>
          <div className="profile-stats">
            <div className="stat-item">
              <div>5</div>
              <div>Uploads</div>
            </div>
            <div className="stat-item">
              <div>12</div>
              <div>Purchases</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="content-section">
          <div className="profile-tabs">
            <button className="profile-tab active">Uploads</button>
            <button className="profile-tab">Purchases</button>
            <button className="profile-tab">Settings</button>
          </div>
          
          <div className="user-uploads">
            <h2>Your Uploaded Agents</h2>
            <p>You haven't uploaded any agents yet.</p>
            <button>Upload New Agent</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;