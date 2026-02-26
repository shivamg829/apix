import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const apps = [
    {
      icon: '⛅',
      title: 'Weather',
      description: 'Check weather conditions anywhere',
      path: '/weather',
      color: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Shop products with ease',
      path: '/ecommerce',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
    },
    {
      icon: '🥘',
      title: 'Recipes',
      description: 'Find delicious recipes',
      path: '/recipes',
      color: '#ffd93d',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #f59e0b 100%)'
    },
    {
      icon: '📰',
      title: 'News',
      description: 'Stay informed with latest news',
      path: '/news',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
    }
  ];

  const benefits = [
    { icon: '⚡', title: 'Fast', desc: 'Lightning quick responses' },
    { icon: '🔒', title: 'Secure', desc: 'Safe data handling' },
    { icon: '🌐', title: 'Global', desc: 'Works worldwide' },
    { icon: '💯', title: 'Free', desc: 'No hidden costs' }
  ];

  return (
    <div className="home-container">
      <section className="hero-new">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="hero-content-new">
          <div className="hero-badge-new">
            <span className="pulse-dot"></span>
            APIx Platform
          </div>
          
          <h1 className="hero-title-new">
            <span className="title-line">Build Better</span>
            <span className="title-line gradient-text-new">With APIs</span>
          </h1>
          
          <p className="hero-desc-new">
            Explore powerful API integrations. Weather, shopping, recipes, 
            and news - all in one beautiful platform.
          </p>
          
          <div className="hero-buttons">
            <Link to="/weather" className="btn-new btn-primary-new">
              <span>Start Exploring</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
<Link to="/weather" className="btn-new btn-secondary-new">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-cards">
            {apps.map((app, i) => (
              <Link 
                to={app.path} 
                key={i} 
                className="app-card-float"
                style={{ 
                  '--card-color': app.color,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                <div className="card-float-icon" style={{ background: app.gradient }}>
                  {app.icon}
                </div>
                <div className="card-float-info">
                  <span className="card-float-title">{app.title}</span>
                  <span className="card-float-desc">{app.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="benefits-bar">
        {benefits.map((item, i) => (
          <div key={i} className="benefit-item">
            <span className="benefit-icon">{item.icon}</span>
            <div className="benefit-text">
              <span className="benefit-title">{item.title}</span>
              <span className="benefit-desc">{item.desc}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="apps-section">
        <div className="section-header-new">
          <span className="section-tag">APPLICATIONS</span>
          <h2 className="section-title-new">Explore Our Apps</h2>
          <p className="section-desc-new">
            Discover powerful API-powered applications
          </p>
        </div>

        <div className="apps-grid">
          {apps.map((app, index) => (
            <Link to={app.path} key={index} className="app-card-new">
              <div className="app-card-bg" style={{ background: app.gradient }}></div>
              <div className="app-card-content">
                <div className="app-icon-new" style={{ background: app.gradient }}>
                  {app.icon}
                </div>
                <h3 className="app-title-new">{app.title}</h3>
                <p className="app-desc-new">{app.description}</p>
                <div className="app-card-footer">
                  <span className="app-link-new">Open App</span>
                  <span className="app-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="cta-new">
        <div className="cta-card-new">
          <div className="cta-content-new">
            <h2 className="cta-title-new">Get Started Today</h2>
            <p className="cta-desc-new">
              Join thousands of users exploring our API-powered applications
            </p>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-stat-num">4+</span>
                <span className="cta-stat-label">Apps</span>
              </div>
              <div className="cta-stat">
                <span className="cta-stat-num">100%</span>
                <span className="cta-stat-label">Free</span>
              </div>
              <div className="cta-stat">
                <span className="cta-stat-num">24/7</span>
                <span className="cta-stat-label">Access</span>
              </div>
            </div>
            <Link to="/weather" className="btn-new btn-white-new">
              Try Now Free
            </Link>
          </div>
          <div className="cta-decoration">
            <div className="deco-circle"></div>
            <div className="deco-circle-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
