---
sidebar_position: 2
---

# Installation

Complete installation guide for EdgeGuard on all supported platforms.

## Prerequisites

Before installing EdgeGuard, ensure you have:

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| **OS** | Linux, macOS, WSL | Ubuntu 22.04+ |
| **Python** | 3.8+ | 3.10+ |
| **RAM** | 2GB | 4GB |
| **Storage** | 500MB | 1GB |
| **Network** | Root/sudo access | Dedicated interface |

:::warning Root Access Required

EdgeGuard requires root/sudo privileges for network packet capture. This is necessary for monitoring network traffic.

:::

## Step 1: Install Ollama

EdgeGuard uses Ollama for local AI processing.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Verify installation
ollama --version
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
# Download and install from ollama.com
# Or use Homebrew
brew install ollama

# Verify installation
ollama --version
```

  </TabItem>
  <TabItem value="windows" label="Windows (WSL)">

```bash
# Install in WSL
curl -fsSL https://ollama.com/install.sh | sh

# Verify installation
ollama --version
```

  </TabItem>
</Tabs>

### Pull Llama 3.2 Model

```bash
ollama pull llama3.2:3b
```

:::tip Model Size

The `llama3.2:3b` model is ~2GB. For better performance on powerful hardware, you can use `llama3.2:7b` instead.

:::

## Step 2: Clone EdgeGuard

```bash
git clone https://github.com/SyedUmerHasan/EdgeGuard.git
cd EdgeGuard
```

## Step 3: Install Dependencies

<Tabs>
  <TabItem value="venv" label="Virtual Environment (Recommended)" default>

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/macOS
# or
venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt
```

  </TabItem>
  <TabItem value="system" label="System-wide">

```bash
# Install dependencies system-wide
pip install -r requirements.txt
```

  </TabItem>
</Tabs>

## Step 4: Run EdgeGuard

```bash
# Run with sudo for network access
sudo python3 main.py
```

:::success First Run

On first run, EdgeGuard will:
1. Discover devices on your network (~30 seconds)
2. Establish baseline behavior patterns
3. Start monitoring for threats

:::

## Platform-Specific Instructions

### Raspberry Pi

<details>
<summary>Click to expand Raspberry Pi instructions</summary>

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python and dependencies
sudo apt install python3-pip python3-venv -y

# Follow steps 1-4 above
```

**Performance Tips:**
- Use Raspberry Pi 4 with 4GB+ RAM
- Use `llama3.2:3b` model (smaller, faster)
- Consider using a USB SSD for better performance

</details>

### Docker

<details>
<summary>Click to expand Docker instructions</summary>

```bash
# Build Docker image
docker build -t edgeguard .

# Run container with network access
docker run --network host --privileged edgeguard
```

:::caution Network Mode

Docker requires `--network host` and `--privileged` for packet capture.

:::

</details>

## Troubleshooting

### Permission Denied

**Problem:** `Permission denied` when running EdgeGuard

**Solution:** Ensure you're using `sudo`:
```bash
sudo python3 main.py
```

### Ollama Not Found

**Problem:** `ollama: command not found`

**Solution:** Verify Ollama installation:
```bash
which ollama
ollama --version
```

If not installed, follow Step 1 again.

### Network Interface Issues

**Problem:** Cannot detect network interface

**Solution:** List available interfaces:
```bash
ip link show  # Linux
ifconfig      # macOS
```

Then specify the interface in configuration.

## Next Steps

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__body">
        <h3>⚙️ Configuration</h3>
        <p>Customize EdgeGuard for your network environment</p>
        <a href="configuration" className="button button--primary">Configure →</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__body">
        <h3>📖 Usage Guide</h3>
        <p>Learn how to use EdgeGuard effectively</p>
        <a href="usage" className="button button--secondary">Learn More →</a>
      </div>
    </div>
  </div>
</div>

