import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const apiApps = [
    {
      icon: '⛅',
      title: 'Weather App',
      description: 'Real-time weather data for any location',
      path: '/weather',
      color: 'linear-gradient(135deg, #00d4ff, #0099cc)'
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Browse and shop products online',
      path: '/ecommerce',
      color: 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
    },
    {
      icon: '🥘',
      title: 'Recipes',
      description: 'Discover delicious recipes',
      path: '/recipes',
      color: 'linear-gradient(135deg, #ffd93d, #f59e0b)'
    },
    {
      icon: '📰',
      title: 'News Hub',
      description: 'Latest news and updates',
      path: '/news',
      color: 'linear-gradient(135deg, #a855f7, #7c3aed)'
    }
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238b5cf6'/%3E%3Cstop offset='100%25' style='stop-color:%23ec4899'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='url(%23grad)' stroke-width='4'/%3E%3Cpath d='M30 50 Q50 20 70 50 Q50 80 30 50' fill='url(%23grad)' opacity='0.8'/%3E%3Ccircle cx='50' cy='50' r='8' fill='%23f472b6'/%3E%3C/svg%3E" 
            alt="APIx Logo" 
            className="logo-icon" 
          />
          <span className="logo-text">APIx</span>
        </Link>
        
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              Home
            </NavLink>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-link dropdown-trigger">
              All Apps
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '6px', transition: 'transform 0.2s' }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {apiApps.map((app, index) => (
                <Link 
                  key={index} 
                  to={app.path} 
                  className="dropdown-item"
                >
                  <div className="dropdown-item-icon" style={{ background: app.color }}>
                    {app.icon}
                  </div>
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-title">{app.title}</span>
                    <span className="dropdown-item-desc">{app.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
