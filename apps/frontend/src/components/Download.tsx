import '../styles/Download.css'

export default function Download() {
  return (
    <section id="download" className="download">
      <div className="container">
        <h2 className="section-title">Get Started Today</h2>
        <p className="section-subtitle">Free and open source - protect your home network now</p>
        <div className="download-options">
          <div className="download-card">
            <h3>Quick Install</h3>
            <pre className="code-block">
              <code>git clone https://github.com/SyedUmerHasan/EdgeGuard.git{'\n'}cd EdgeGuard{'\n'}pip install -r requirements.txt{'\n'}python main.py</code>
            </pre>
          </div>
          <div className="download-card">
            <h3>Requirements</h3>
            <ul className="requirements-list">
              <li><i className="fas fa-check"></i> Python 3.8+</li>
              <li><i className="fas fa-check"></i> Linux-based system</li>
              <li><i className="fas fa-check"></i> Network access</li>
              <li><i className="fas fa-check"></i> 2GB+ RAM recommended</li>
            </ul>
          </div>
        </div>
        <div className="cta-buttons">
          <a href="https://github.com/SyedUmerHasan/EdgeGuard" className="btn btn-primary btn-large">
            <i className="fab fa-github"></i>
            View on GitHub
          </a>
          <a href="https://github.com/SyedUmerHasan/EdgeGuard/blob/main/README.md" className="btn btn-secondary btn-large">
            <i className="fas fa-book"></i>
            Documentation
          </a>
        </div>
      </div>
    </section>
  )
}
