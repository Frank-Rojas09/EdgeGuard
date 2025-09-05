import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-shield-alt"></i>
              <span>EdgeGuard</span>
            </div>
            <p>Privacy-first IoT security for your home network</p>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/SyedUmerHasan/EdgeGuard">GitHub</a></li>
              <li><a href="https://github.com/SyedUmerHasan/EdgeGuard/blob/main/README.md">Documentation</a></li>
              <li><a href="https://github.com/SyedUmerHasan/EdgeGuard/issues">Issues</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com/SyedUmerHasan/EdgeGuard/discussions">Discussions</a></li>
              <li><a href="https://github.com/SyedUmerHasan/EdgeGuard/blob/main/CONTRIBUTING.md">Contributing</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EdgeGuard. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
