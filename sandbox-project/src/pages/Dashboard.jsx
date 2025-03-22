import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

function Dashboard() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('owned');
  
  // Sample data - in a real app, this would come from a database
  const ownedAgents = [
    {
      id: 1,
      name: "Personal Assistant Pro",
      description: "Multi-purpose productivity assistant with calendar management",
      usage: 28,
      imageUrl: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Productivity",
      lastUsed: "2 hours ago"
    },
    {
      id: 2,
      name: "Code Helper",
      description: "AI programming assistant that helps with debugging and code generation",
      usage: 42,
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Development",
      lastUsed: "Yesterday"
    },
    {
      id: 3,
      name: "Data Visualizer",
      description: "Transform your data into beautiful visualizations",
      usage: 15,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Analytics",
      lastUsed: "3 days ago"
    }
  ];
  
  const createdAgents = [
    {
      id: 4,
      name: "Email Summarizer",
      description: "Summarizes long email threads into actionable points",
      downloads: 156,
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Productivity",
      created: "2 weeks ago",
      status: "Published"
    },
    {
      id: 5,
      name: "Meeting Assistant",
      description: "Takes notes during meetings and creates action items",
      downloads: 89,
      imageUrl: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Productivity",
      created: "1 month ago",
      status: "Published"
    }
  ];
  
  const recentActivities = [
    { id: 1, action: "Used", agentName: "Personal Assistant Pro", time: "2 hours ago" },
    { id: 2, action: "Updated", agentName: "Meeting Assistant", time: "Yesterday" },
    { id: 3, action: "Downloaded", agentName: "Content Generator", time: "3 days ago" },
    { id: 4, action: "Created", agentName: "Email Summarizer", time: "2 weeks ago" }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="user-greeting">
          <h1>Hello, {currentUser?.displayName || 'User'}!</h1>
          <p>Manage your AI agents and see their performance</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-primary create-agent-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Create New Agent
          </button>
        </div>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M9.5 2.672a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm4.5.5a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm-.5 9.326a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm-4 0a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm-5-3.701a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zm.5-4.625a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5z"/>
            </svg>
          </div>
          <div className="stat-info">
            <h4>{ownedAgents.length}</h4>
            <p>Owned Agents</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
            </svg>
          </div>
          <div className="stat-info">
            <h4>{ownedAgents.reduce((total, agent) => total + agent.usage, 0)}</h4>
            <p>Total Agent Runs</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13zM1 13a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1V8h1.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4h-2.5a1 1 0 0 0-1 1v.9H9v-.9a1 1 0 0 0-1-1H5.5a1 1 0 0 0-.8.4L2.725 5.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h1.5v5z"/>
            </svg>
          </div>
          <div className="stat-info">
            <h4>{createdAgents.length}</h4>
            <p>Created Agents</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 13V2.5zM1.5 2a.5.5 0 0 0-.5.5v10.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2.5a.5.5 0 0 0-.5-.5h-11z"/>
              <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            </svg>
          </div>
          <div className="stat-info">
            <h4>{createdAgents.reduce((total, agent) => total + agent.downloads, 0)}</h4>
            <p>Total Downloads</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="main-content">
          <div className="content-tabs">
            <button 
              className={`tab-button ${activeTab === 'owned' ? 'active' : ''}`}
              onClick={() => setActiveTab('owned')}
            >
              My Owned Agents
            </button>
            <button 
              className={`tab-button ${activeTab === 'created' ? 'active' : ''}`}
              onClick={() => setActiveTab('created')}
            >
              My Created Agents
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'owned' && (
              <div className="agents-grid">
                {ownedAgents.map(agent => (
                  <div className="agent-card" key={agent.id}>
                    <div className="agent-card-image" style={{ backgroundImage: `url(${agent.imageUrl})` }}>
                      <div className="agent-category">{agent.category}</div>
                    </div>
                    <div className="agent-card-content">
                      <h3>{agent.name}</h3>
                      <p>{agent.description}</p>
                      <div className="agent-card-footer">
                        <div className="agent-stats">
                          <span>{agent.usage} runs</span>
                          <span>Last used: {agent.lastUsed}</span>
                        </div>
                        <button className="btn-secondary run-agent-btn">Run</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="agent-card add-agent-card">
                  <div className="add-agent-content">
                    <div className="add-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>
                    </div>
                    <p>Add New Agent</p>
                    <Link to="/marketplace" className="browse-link">Browse Marketplace</Link>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'created' && (
              <div className="agents-grid">
                {createdAgents.map(agent => (
                  <div className="agent-card" key={agent.id}>
                    <div className="agent-card-image" style={{ backgroundImage: `url(${agent.imageUrl})` }}>
                      <div className="agent-category">{agent.category}</div>
                      <div className="agent-status">{agent.status}</div>
                    </div>
                    <div className="agent-card-content">
                      <h3>{agent.name}</h3>
                      <p>{agent.description}</p>
                      <div className="agent-card-footer">
                        <div className="agent-stats">
                          <span>{agent.downloads} downloads</span>
                          <span>Created: {agent.created}</span>
                        </div>
                        <button className="btn-secondary edit-agent-btn">Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="agent-card add-agent-card">
                  <div className="add-agent-content">
                    <div className="add-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>
                    </div>
                    <p>Create New Agent</p>
                    <button className="create-link">Start Creating</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="sidebar">
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div className="activity-item" key={activity.id}>
                  <div className="activity-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.25-14.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zm0 10.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zM2.5 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2.5 8zm10.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75z"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <p className="activity-title">{activity.action} "{activity.agentName}"</p>
                    <p className="activity-time">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="quick-links">
            <h3>Quick Links</h3>
            <Link to="/marketplace" className="quick-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045z"/>
              </svg>
              Browse Marketplace
            </Link>
            <Link to="/profile" className="quick-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              View Profile
            </Link>
            <a href="#" className="quick-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
              Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 