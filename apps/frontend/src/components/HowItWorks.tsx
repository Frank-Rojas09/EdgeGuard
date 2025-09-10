import '../styles/HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Network Monitoring',
      description: 'Captures and analyzes network packet metadata from your home devices'
    },
    {
      number: '2',
      title: 'AI Analysis',
      description: 'Local Llama 3.2 model processes traffic patterns to identify threats'
    },
    {
      number: '3',
      title: 'Threat Response',
      description: 'Automatically blocks malicious traffic and alerts you to security issues'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How EdgeGuard Works</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
