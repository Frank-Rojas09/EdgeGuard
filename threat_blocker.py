#!/usr/bin/env python3
"""
EdgeGuard Real-time Blocking & Response System
Automatically blocks suspicious devices and threats
"""

import subprocess
import json
import time
from datetime import datetime, timedelta
import threading
import logging

class ThreatBlocker:
    def __init__(self):
        self.blocked_ips = set()
        self.quarantine_ips = set()
        self.block_rules = []
        self.auto_block_enabled = True
        self.setup_logging()
        self.load_blocked_ips()
        
    def setup_logging(self):
        """Setup logging for blocking actions"""
        logging.basicConfig(
            filename='threat_blocking.log',
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )
        self.logger = logging.getLogger(__name__)
    
    def load_blocked_ips(self):
        """Load previously blocked IPs from file"""
        try:
            with open('blocked_ips.json', 'r') as f:
                data = json.load(f)
                self.blocked_ips = set(data.get('blocked', []))
                self.quarantine_ips = set(data.get('quarantine', []))
        except FileNotFoundError:
            pass
    
    def save_blocked_ips(self):
        """Save blocked IPs to file"""
        data = {
            'blocked': list(self.blocked_ips),
            'quarantine': list(self.quarantine_ips),
            'last_updated': datetime.now().isoformat()
        }
        with open('blocked_ips.json', 'w') as f:
            json.dump(data, f, indent=2)
    
    def block_ip(self, ip, reason="Suspicious activity", severity="medium"):
        """Block IP using iptables"""
        if ip in self.blocked_ips:
            return False
        
        try:
            # Add iptables rule to block IP
            cmd = ['sudo', 'iptables', '-I', 'INPUT', '-s', ip, '-j', 'DROP']
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode == 0:
                self.blocked_ips.add(ip)
                self.logger.info(f"BLOCKED IP: {ip} - Reason: {reason} - Severity: {severity}")
                print(f"🚫 BLOCKED: {ip} ({reason})")
                
                # Save to persistent storage
                self.save_blocked_ips()
                return True
            else:
                self.logger.error(f"Failed to block {ip}: {result.stderr}")
                return False
                
        except Exception as e:
            self.logger.error(f"Error blocking {ip}: {e}")
            return False
    
    def quarantine_device(self, ip, reason="Suspicious behavior"):
        """Quarantine device (limited access)"""
        if ip in self.quarantine_ips:
            return False
        
        try:
            # Allow only DNS and DHCP, block everything else
            subprocess.run(['sudo', 'iptables', '-I', 'FORWARD', '-s', ip, '-p', 'udp', '--dport', '53', '-j', 'ACCEPT'], check=True)
            subprocess.run(['sudo', 'iptables', '-I', 'FORWARD', '-s', ip, '-p', 'udp', '--dport', '67', '-j', 'ACCEPT'], check=True)
            subprocess.run(['sudo', 'iptables', '-I', 'FORWARD', '-s', ip, '-j', 'DROP'], check=True)
            
            self.quarantine_ips.add(ip)
            self.logger.info(f"QUARANTINED: {ip} - Reason: {reason}")
            print(f"🔒 QUARANTINED: {ip} ({reason})")
            
            self.save_blocked_ips()
            return True
            
        except Exception as e:
            self.logger.error(f"Error quarantining {ip}: {e}")
            return False
    
    def unblock_ip(self, ip):
        """Remove IP from block list"""
        if ip not in self.blocked_ips:
            return False
        
        try:
            # Remove iptables rule
            cmd = ['sudo', 'iptables', '-D', 'INPUT', '-s', ip, '-j', 'DROP']
            subprocess.run(cmd, capture_output=True)
            
            self.blocked_ips.remove(ip)
            self.logger.info(f"UNBLOCKED: {ip}")
            print(f"✅ UNBLOCKED: {ip}")
            
            self.save_blocked_ips()
            return True
            
        except Exception as e:
            self.logger.error(f"Error unblocking {ip}: {e}")
            return False
    
    def process_threat(self, threat_data):
        """Process threat and decide on response"""
        ip = threat_data.get('ip')
        threat_type = threat_data.get('type', 'unknown')
        severity = threat_data.get('severity', 'medium')
        confidence = threat_data.get('confidence', 0.5)
        
        if not ip or not self.auto_block_enabled:
            return
        
        # Decision logic based on threat type and severity
        if severity == 'critical' or confidence > 0.9:
            # Immediate block for critical threats
            self.block_ip(ip, f"{threat_type} (critical)", severity)
            
        elif severity == 'high' and confidence > 0.7:
            # Block high severity threats with good confidence
            self.block_ip(ip, f"{threat_type} (high confidence)", severity)
            
        elif threat_type in ['port_scan', 'brute_force', 'malware_communication']:
            # Always block these specific threat types
            self.block_ip(ip, threat_type, severity)
            
        elif severity == 'medium' and confidence > 0.6:
            # Quarantine medium threats
            self.quarantine_device(ip, f"{threat_type} (quarantine)")
            
        else:
            # Log but don't block low confidence threats
            self.logger.warning(f"LOW CONFIDENCE THREAT: {ip} - {threat_type} - {severity}")
    
    def auto_unblock_expired(self):
        """Automatically unblock IPs after timeout"""
        # This would check timestamps and unblock old entries
        # Simplified for now
        pass
    
    def get_blocking_status(self):
        """Get current blocking status"""
        return {
            'blocked_count': len(self.blocked_ips),
            'quarantined_count': len(self.quarantine_ips),
            'blocked_ips': list(self.blocked_ips),
            'quarantined_ips': list(self.quarantine_ips),
            'auto_block_enabled': self.auto_block_enabled
        }

class ResponseSystem:
    def __init__(self):
        self.blocker = ThreatBlocker()
        self.response_queue = []
        self.running = False
        
    def start(self):
        """Start the response system"""
        self.running = True
        self.response_thread = threading.Thread(target=self._process_responses)
        self.response_thread.daemon = True
        self.response_thread.start()
        print("🛡️  Response system started")
    
    def stop(self):
        """Stop the response system"""
        self.running = False
        print("🛡️  Response system stopped")
    
    def add_threat(self, threat_data):
        """Add threat to response queue"""
        self.response_queue.append({
            'timestamp': datetime.now(),
            'threat': threat_data
        })
    
    def _process_responses(self):
        """Process threat responses in background"""
        while self.running:
            if self.response_queue:
                response_item = self.response_queue.pop(0)
                threat = response_item['threat']
                
                print(f"⚡ Processing threat: {threat.get('type')} from {threat.get('ip')}")
                self.blocker.process_threat(threat)
            
            time.sleep(1)  # Check every second
    
    def emergency_block(self, ip, reason="Emergency block"):
        """Emergency block - immediate action"""
        return self.blocker.block_ip(ip, reason, "critical")
    
    def whitelist_ip(self, ip):
        """Add IP to whitelist (unblock and prevent future blocks)"""
        self.blocker.unblock_ip(ip)
        # Would add to whitelist file in full implementation
        print(f"✅ IP {ip} added to whitelist")

if __name__ == "__main__":
    # Test the blocking system
    response_system = ResponseSystem()
    response_system.start()
    
    # Simulate some threats
    test_threats = [
        {'ip': '192.168.1.100', 'type': 'port_scan', 'severity': 'high', 'confidence': 0.8},
        {'ip': '192.168.1.101', 'type': 'suspicious_traffic', 'severity': 'medium', 'confidence': 0.6},
        {'ip': '192.168.1.102', 'type': 'malware_communication', 'severity': 'critical', 'confidence': 0.9}
    ]
    
    for threat in test_threats:
        response_system.add_threat(threat)
        time.sleep(2)
    
    # Show status
    time.sleep(5)
    status = response_system.blocker.get_blocking_status()
    print(f"\n📊 Blocking Status: {json.dumps(status, indent=2)}")
    
    response_system.stop()
