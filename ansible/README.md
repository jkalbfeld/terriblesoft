# TerribleSoft Ansible

Infrastructure-as-code for terriblesoft.com. Everything is idempotent.

## Prerequisites

```bash
pip install ansible
```

SSH key must be authorized on the target host for the `ubuntu` user.

## Full Deploy

```bash
cd ansible
ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory/hosts.ini playbooks/deploy.yml
```

## Fast Redeploy (code changes only)

```bash
cd ansible
ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory/hosts.ini playbooks/redeploy.yml
```

## Roles

| Role | Purpose |
|------|---------|
| `common` | System deps, app user, directories, sysctl, logrotate |
| `nodejs` | Node.js 20 via NodeSource |
| `app` | Git clone, npm install, Next.js build, systemd service |
| `nginx` | Vhost config, TLS proxy, static asset caching, catch-all 444 |
| `certbot` | Let's Encrypt cert acquisition and auto-renewal |

## Server

- IP: `199.33.244.41` (ThoughtWave vm-starter, service 710)
- App: `/opt/terriblesoft` 
- Data: `/opt/terriblesoft/data/subscribers.db`
- Service: `systemctl status terriblesoft`
- Logs: `journalctl -u terriblesoft -f`

## Email Subscribers

```bash
ssh ubuntu@199.33.244.41
sudo sqlite3 /opt/terriblesoft/data/subscribers.db 'SELECT email, created_at FROM subscribers ORDER BY created_at;'
```
