import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Protect Your Smart Home with 
            <span className="gradient-text"> AI-Powered Security</span>
          </h1>
          <p className="hero-description">
            EdgeGuard is a privacy-first IoT threat detector that uses local AI to monitor your home network and protect against cyber attacks - no cloud required.
          </p>
          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary">
              <i className="fas fa-download"></i>
              Get Started
            </a>
            <a href="https://github.com/SyedUmerHasan/EdgeGuard" className="btn btn-secondary">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Local Processing</span>
            </div>
            <div className="stat">
              <span className="stat-number">MIT</span>
              <span className="stat-label">Open Source</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Protection</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="security-shield">
            <i className="fas fa-shield-alt"></i>
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1"></div>
            <div className="pulse-ring delay-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
