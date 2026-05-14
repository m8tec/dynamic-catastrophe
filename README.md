## Getting Started

### Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/m8tec/dynamic-catastrophe.git
cd dynamic-catastrophe

# Configure
cp .env.example .env
nano .env  # Edit with your settings

# Start
docker compose up -d

# Watch logs
docker compose logs -f
```

### Building from Source

```bash
docker compose -f compose.local.yaml up -d --build
docker compose -f compose.local.yaml logs -f
docker compose -f compose.local.yaml down
```

### Active Development (Hot Reloading)
```bash
npm install
npm run dev
```

## GitHub Actions (Build + Deploy)

This repository contains two workflows:

- `.github/workflows/build-image.yml`
	- Builds a production Docker image and pushes it to GHCR (`ghcr.io/m8tec/dynamic-catastrophe`)
- `.github/workflows/deploy-vps.yml`
	- Runs after a successful image build and deploys `:latest` to a VPS over SSH using Docker Compose

Required repository secrets:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `VPS_PORT` (defaults to `22`)
- `APP_PORT` (defaults to `3000`)
- `APP_ENV_FILE` (optional absolute path to an env file on VPS, e.g. `/opt/dynamic-catastrophe/.env`)

VPS prerequisites:

- Docker must be installed.
- The SSH user must be allowed to run Docker commands.
