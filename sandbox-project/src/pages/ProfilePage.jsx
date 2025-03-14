// src/pages/ProfilePage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import './ProfilePage.css';

function ProfilePage() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <img 
          src={currentUser.photoURL || 'https://randomuser.me/api/portraits/lego/1.jpg'} 
          alt="Profile" 
          className="profile-picture" 
        />
        <div className="profile-info">
          <h2>{currentUser.displayName}</h2>
          <p>{currentUser.email}</p>
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
