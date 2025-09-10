import '../styles/Download.css'

export default function Download() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section id="download" className="download">
      <div className="container">
        <h2 className="section-title">Get Started Today</h2>
        <div className="download-content">
          <div className="download-info">
            <h3>System Requirements</h3>
            <ul>
              <li><i className="fas fa-check"></i> Python 3.8+</li>
              <li><i className="fas fa-check"></i> Linux/macOS/WSL</li>
              <li><i className="fas fa-check"></i> 2GB RAM minimum</li>
              <li><i className="fas fa-check"></i> Ollama with Llama 3.2</li>
            </ul>
          </div>
          <div className="download-buttons">
            <a href="https://github.com/SyedUmerHasan/EdgeGuard/archive/main.zip" className="btn btn-primary btn-large">
              <i className="fas fa-download"></i>
              Download EdgeGuard
            </a>
            <div className="install-command">
              <code>git clone https://github.com/SyedUmerHasan/EdgeGuard.git</code>
              <button className="copy-btn" onClick={() => copyToClipboard('git clone https://github.com/SyedUmerHasan/EdgeGuard.git')}>
                <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
