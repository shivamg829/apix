import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const stats = [
    { number: '4+', label: 'API Apps' },
    { number: '100%', label: 'Free' },
    { number: '24/7', label: 'Available' },
    { number: '50K+', label: 'Users' }
  ];

  const features = [
    { icon: '⛅', title: 'Weather', desc: 'Real-time weather data from OpenWeather API' },
    { icon: '🛒', title: 'E-Commerce', desc: 'Product browsing from Fake Store API' },
    { icon: '🥘', title: 'Recipes', desc: 'Recipe search from TheMealDB API' },
    { icon: '📰', title: 'News', desc: 'Latest headlines from News API' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
        </div>
        <div className="container">
          <h1 className="about-title">About <span className="gradient-text-new">APIx</span></h1>
          <p className="about-subtitle">Your gateway to powerful API integrations</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="mission-card">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-text">
                  APIx is a comprehensive demonstration of modern React development, 
                  showcasing the integration of multiple live APIs in a single application.
                  We aim to provide a seamless user experience while demonstrating best
                  practices in React development.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header-new">
            <span className="section-tag">FEATURES</span>
            <h2 className="section-title-new">What We Offer</h2>
          </div>
          
          <div className="features-grid-new">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-new">
                <div className="feature-icon-new">{feature.icon}</div>
                <h3 className="feature-title-new">{feature.title}</h3>
                <p className="feature-desc-new">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <div className="container">
          <div className="tech-content">
            <h2 className="tech-title">Technologies Used</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <span className="tech-name">React.js</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🛣️</span>
                <span className="tech-name">React Router</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">⚡</span>
                <span className="tech-name">Vite</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🎨</span>
                <span className="tech-name">Bootstrap</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📡</span>
                <span className="tech-name">Axios</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
