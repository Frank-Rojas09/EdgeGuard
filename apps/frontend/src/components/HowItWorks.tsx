import '../styles/HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Install EdgeGuard',
      description: 'Deploy on Raspberry Pi or any Linux system on your network'
    },
    {
      number: '2',
      title: 'Automatic Discovery',
      description: 'EdgeGuard scans and identifies all IoT devices automatically'
    },
    {
      number: '3',
      title: 'AI Learning',
      description: 'Local AI models learn normal behavior patterns for each device'
    },
    {
      number: '4',
      title: 'Real-time Protection',
      description: 'Threats are detected and blocked instantly with detailed alerts'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Simple setup, powerful protection</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
