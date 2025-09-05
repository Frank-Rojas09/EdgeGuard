import '../styles/Features.css'

export default function Features() {
  const features = [
    {
      icon: 'fa-network-wired',
      title: 'Device Discovery',
      description: 'Automatically detect and catalog all IoT devices on your network'
    },
    {
      icon: 'fa-brain',
      title: 'AI Threat Detection',
      description: 'Local AI models identify suspicious behavior and potential attacks'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Real-time Protection',
      description: 'Instant blocking of malicious traffic and automated threat response'
    },
    {
      icon: 'fa-lock',
      title: 'Privacy First',
      description: 'All processing happens locally - your data never leaves your network'
    },
    {
      icon: 'fa-chart-line',
      title: 'Network Analytics',
      description: 'Detailed insights into traffic patterns and device behavior'
    },
    {
      icon: 'fa-code',
      title: 'Open Source',
      description: 'Fully transparent, auditable code under MIT license'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">Enterprise-grade security for your home network</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
