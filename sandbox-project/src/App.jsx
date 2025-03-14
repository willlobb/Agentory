// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import MarketplacePage from './pages/MarketplacePage'
import './index.css'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Landing</Link>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/marketplace">Marketplace</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;