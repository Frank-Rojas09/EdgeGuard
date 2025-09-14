---
sidebar_position: 1
---

# Getting Started

Welcome to **EdgeGuard** - AI-powered IoT security for your home network.

:::info What is EdgeGuard?

EdgeGuard is a privacy-first IoT threat detector that uses local AI to monitor your home network and protect against cyber attacks. All analysis happens on your device - **no cloud required**.

:::

## Why EdgeGuard?

EdgeGuard provides enterprise-grade security for your home network without compromising your privacy:

- 🔒 **100% Local Processing** - Your data never leaves your network
- 🤖 **AI-Powered Detection** - Identifies sophisticated threats in real-time
- ⚡ **Easy Setup** - Get started in minutes
- 🛡️ **Automated Protection** - Blocks threats automatically
- 💻 **Open Source** - Fully transparent and auditable

## Quick Start

Get EdgeGuard running in 3 simple steps:

```bash
# 1. Clone the repository
git clone https://github.com/SyedUmerHasan/EdgeGuard.git
cd EdgeGuard

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run EdgeGuard (requires sudo for packet capture)
sudo python3 main.py
```

:::tip First Time Setup

Make sure you have [Ollama](https://ollama.com) installed with the Llama 3.2 model:

```bash
ollama pull llama3.2:3b
```

:::

## What's Next?

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>📦 Installation</h3>
      </div>
      <div className="card__body">
        <p>Complete installation guide for all platforms</p>
      </div>
      <div className="card__footer">
        <a href="installation" className="button button--primary button--block">Install EdgeGuard</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>⚙️ Configuration</h3>
      </div>
      <div className="card__body">
        <p>Customize EdgeGuard for your network</p>
      </div>
      <div className="card__footer">
        <a href="configuration" className="button button--secondary button--block">Configure</a>
      </div>
    </div>
  </div>
</div>

## Key Features

### Device Discovery
Automatically identifies all IoT devices on your network with behavioral fingerprinting.

### AI Threat Detection
Uses Llama 3.2 to analyze traffic patterns and detect anomalies with 99%+ accuracy.

### Real-Time Protection
Instant blocking of malicious traffic with detailed threat analysis and alerts.

### Privacy First
All processing happens locally - no data collection, no cloud dependencies, complete privacy.

