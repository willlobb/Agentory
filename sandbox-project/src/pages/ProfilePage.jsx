import React from 'react';

function ProfilePage() {
  return (
    <div>
      <h1>User Profile</h1>
      <div className="profile-section">
        <div className="user-info">
          <h2>Personal Details</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <button>Edit Profile</button>
        </div>
        
        <div className="user-uploads">
          <h2>Your Uploaded Agents</h2>
          <p>You haven't uploaded any agents yet.</p>
          <button>Upload New Agent</button>
        </div>
        
        <div className="purchase-history">
          <h2>Purchase History</h2>
          <p>No purchase history available.</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage; 