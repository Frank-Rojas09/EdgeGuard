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
              <span className="stat-number">Real-time</span>
              <span className="stat-label">Threat Detection</span>
            </div>
            <div className="stat">
              <span className="stat-number">Open Source</span>
              <span className="stat-label">MIT License</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
