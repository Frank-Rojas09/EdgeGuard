---
sidebar_position: 3
---

# Configuration

Customize EdgeGuard for your network environment.

:::tip Quick Start

EdgeGuard works out of the box with sensible defaults. Configuration is optional for most users.

:::

## Configuration File

Create a `config.yaml` file in the EdgeGuard directory:

```yaml title="config.yaml"
network:
  interface: "eth0"           # Network interface to monitor
  scan_interval: 60           # Seconds between scans

ai:
  model: "llama3.2:3b"       # Ollama model name
  temperature: 0.3            # AI temperature (0.0-1.0)

detection:
  anomaly_threshold: 0.7      # Detection sensitivity (0.0-1.0)
  enable_auto_block: true     # Automatic threat blocking

logging:
  level: "INFO"               # DEBUG, INFO, WARNING, ERROR
  file: "logs/edgeguard.log" # Log file path
```

## Network Configuration

### Network Interface

Specify which network interface to monitor:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="auto" label="Auto-detect (Default)" default>

EdgeGuard auto-detects the primary interface. No configuration needed.

  </TabItem>
  <TabItem value="manual" label="Manual Selection">

```yaml
network:
  interface: "eth0"  # or "wlan0" for WiFi
```

List available interfaces with `ip link show` (Linux) or `ifconfig` (macOS)

  </TabItem>
</Tabs>

### Scan Interval

Control how often EdgeGuard scans the network:

```yaml
network:
  scan_interval: 60  # Seconds (default: 60)
```

| Interval | Use Case | Resource Usage |
|----------|----------|----------------|
| 30s | High security | Higher CPU |
| 60s | Balanced (default) | Moderate |
| 300s | Low activity networks | Lower CPU |

:::warning Performance Impact

Lower intervals (more frequent scans) increase CPU usage. For Raspberry Pi, keep at 60s or higher.

:::

## AI Model Settings

### Model Selection

Choose the AI model based on your hardware:

<Tabs>
  <TabItem value="3b" label="3B Model (Recommended)" default>

```yaml
ai:
  model: "llama3.2:3b"
```

Best for: Raspberry Pi 4, Systems with 4GB+ RAM, Balanced performance

  </TabItem>
  <TabItem value="1b" label="1B Model (Lightweight)">

```yaml
ai:
  model: "llama3.2:1b"
```

Best for: Raspberry Pi 3, Systems with 2GB RAM, Lower resource usage

  </TabItem>
  <TabItem value="7b" label="7B Model (High Performance)">

```yaml
ai:
  model: "llama3.2:7b"
```

Best for: Dedicated servers, Systems with 8GB+ RAM, Maximum accuracy

  </TabItem>
</Tabs>

### Temperature Setting

Control AI response randomness:

```yaml
ai:
  temperature: 0.3  # Range: 0.0 to 1.0
```

| Value | Behavior | Use Case |
|-------|----------|----------|
| 0.0-0.3 | Focused, deterministic | Security (recommended) |
| 0.4-0.7 | Balanced | General use |
| 0.8-1.0 | Creative, varied | Experimental |

:::tip Security Recommendation

Keep temperature at **0.3 or lower** for consistent threat detection.

:::

## Detection Settings

### Anomaly Threshold

Adjust detection sensitivity:

```yaml
detection:
  anomaly_threshold: 0.7  # Range: 0.0 to 1.0
```

<details>
<summary>Understanding Threshold Values</summary>

| Threshold | Sensitivity | False Positives | Missed Threats |
|-----------|-------------|-----------------|----------------|
| 0.5 | Very High | High | Very Low |
| 0.7 | Balanced ✅ | Moderate | Low |
| 0.9 | Low | Low | Higher |

**Recommendation:** Start with 0.7 and adjust based on your network.

</details>

### Auto-Block

Enable or disable automatic threat blocking:

```yaml
detection:
  enable_auto_block: true  # true or false
```

- **true** - Automatically blocks detected threats
- **false** - Alerts only, manual blocking required

:::caution Auto-Block

Auto-block may occasionally block legitimate traffic. Monitor logs and adjust threshold if needed.

:::

## Logging Configuration

### Log Level

Control logging verbosity:

```yaml
logging:
  level: "INFO"  # DEBUG, INFO, WARNING, ERROR
```

| Level | Output | Use Case |
|-------|--------|----------|
| DEBUG | Everything | Development, troubleshooting |
| INFO | Normal operations | Production (default) |
| WARNING | Issues only | Minimal logging |
| ERROR | Errors only | Critical issues only |

### Log File

Specify log file location:

```yaml
logging:
  file: "logs/edgeguard.log"
  max_size: "10MB"      # Rotate after size
  backup_count: 5       # Keep 5 old logs
```

## Whitelist / Blacklist

### Whitelist Trusted Devices

Prevent false positives for known devices:

```yaml
whitelist:
  - "192.168.1.100"  # Home server
  - "192.168.1.101"  # Smart TV
  - "AA:BB:CC:DD:EE:FF"  # By MAC address
```

### Blacklist Suspicious Sources

Block known malicious IPs or domains:

```yaml
blacklist:
  ips:
    - "203.0.113.0"
  domains:
    - "malicious-site.com"
    - "*.suspicious-domain.net"
```

## Advanced Settings

### Custom Detection Rules

Create custom rules for specific threats:

```yaml
custom_rules:
  port_scan:
    enabled: true
    threshold: 10        # Ports per minute
    action: "block"
    
  data_exfiltration:
    enabled: true
    threshold: 100       # MB per minute
    action: "alert"
    
  unusual_hours:
    enabled: true
    quiet_hours: "22:00-06:00"
    action: "alert"
```

### Performance Tuning

Optimize for your hardware:

```yaml
performance:
  max_threads: 4           # CPU threads to use
  buffer_size: 1024        # Packet buffer size
  cache_ttl: 3600         # Cache timeout (seconds)
```

## Environment Variables

Override config with environment variables:

```bash
export EDGEGUARD_INTERFACE="eth0"
export EDGEGUARD_LOG_LEVEL="DEBUG"
export EDGEGUARD_AUTO_BLOCK="false"

sudo python3 main.py
```

## Configuration Examples

### Home Network (Default)

```yaml title="config-home.yaml"
network:
  scan_interval: 60
ai:
  model: "llama3.2:3b"
  temperature: 0.3
detection:
  anomaly_threshold: 0.7
  enable_auto_block: true
```

### High Security

```yaml title="config-high-security.yaml"
network:
  scan_interval: 30
ai:
  model: "llama3.2:7b"
  temperature: 0.1
detection:
  anomaly_threshold: 0.5
  enable_auto_block: true
logging:
  level: "DEBUG"
```

### Low Resource (Raspberry Pi 3)

```yaml title="config-low-resource.yaml"
network:
  scan_interval: 120
ai:
  model: "llama3.2:1b"
  temperature: 0.3
detection:
  anomaly_threshold: 0.8
  enable_auto_block: false
```

## Validation

Validate your configuration:

```bash
python3 -m edgeguard.config --validate config.yaml
```

## Next Steps

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__body">
        <h3>📖 Usage Guide</h3>
        <p>Learn how to use EdgeGuard effectively</p>
        <a href="usage" className="button button--primary">Learn More →</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__body">
        <h3>🏗️ Architecture</h3>
        <p>Understand how EdgeGuard works</p>
        <a href="architecture" className="button button--secondary">View Architecture →</a>
      </div>
    </div>
  </div>
</div>

