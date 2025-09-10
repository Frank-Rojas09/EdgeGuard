import '../styles/Features.css'

export default function Features() {
  const features = [
    {
      icon: 'fa-user-shield',
      title: 'Privacy First',
      description: 'All analysis happens locally on your device. No data ever leaves your network.'
    },
    {
      icon: 'fa-brain',
      title: 'AI-Powered Detection',
      description: 'Uses Llama 3.2 AI model to identify sophisticated threats and attack patterns.'
    },
    {
      icon: 'fa-microchip',
      title: 'Lightweight & Fast',
      description: 'Runs on Raspberry Pi or any Linux device with minimal resource usage.'
    },
    {
      icon: 'fa-code',
      title: 'Open Source',
      description: 'MIT licensed for transparency, security auditing, and community contributions.'
    },
    {
      icon: 'fa-clock',
      title: 'Real-Time Monitoring',
      description: 'Continuous network traffic analysis with instant threat notifications.'
    },
    {
      icon: 'fa-cogs',
      title: 'Easy Setup',
      description: 'Simple installation process with automated configuration and updates.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose EdgeGuard?</h2>
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
