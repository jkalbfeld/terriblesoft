# TerribleSoft Ansible Deployment

Idempotent deployment for terriblesoft.com.

## Requirements

- Ansible 2.14+
- SSH access to the target host as root
- DNS already pointing to the target IP

## Usage

### Full deploy (first time or full reprovisioning)
```bash
cd ansible
ansible-playbook -i inventory/hosts.ini playbooks/deploy.yml
```

### Fast redeploy after code changes
```bash
cd ansible
ansible-playbook -i inventory/hosts.ini playbooks/redeploy.yml
```

### Force rebuild even if git hasn't changed
```bash
cd ansible
ansible-playbook -i inventory/hosts.ini playbooks/redeploy.yml -e force_build=true
```

## What it does

1. **common** — apt deps, system user, UFW firewall
2. **nodejs** — installs Node.js 22 via NodeSource
3. **app** — clones repo, builds Next.js, deploys standalone, manages systemd service
4. **nginx** — reverse proxy config with security headers and static asset caching
5. **certbot** — Let's Encrypt TLS cert (skips if already present)

## Secrets

No secrets required for deployment. The app uses SQLite at `{{ app_dir }}/data/terriblesoft.db`.
The DB is created automatically on first run by the Next.js API routes.

## Rollback

To rollback to a previous commit:
```bash
ansible-playbook -i inventory/hosts.ini playbooks/redeploy.yml -e app_branch=<commit-sha>
```
