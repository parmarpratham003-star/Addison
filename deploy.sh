#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> Deploying addisonsdisease..."

# Pre-flight checks
if [ ! -f .env ]; then
  echo "ERROR: .env file not found. Copy .env.example to .env and configure."
  exit 1
fi

if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js is not installed."
  exit 1
fi

if ! command -v pm2 &> /dev/null; then
  echo "ERROR: PM2 is not installed. Run: npm install -g pm2"
  exit 1
fi

# Install dependencies (npm ci for clean install, fallback to npm install)
if [ -f package-lock.json ]; then
  echo "==> Installing dependencies (npm ci)..."
  npm ci
else
  echo "==> Installing dependencies (npm install)..."
  npm install
fi

# Build
echo "==> Building application..."
npm run build

# Prisma
echo "==> Prisma generate..."
npx prisma generate

if [ -d "prisma/migrations" ] && [ "$(ls -A prisma/migrations 2>/dev/null)" ]; then
  echo "==> Prisma migrate deploy..."
  npx prisma migrate deploy --skip-generate
else
  echo "==> No migrations found. Syncing schema with db push..."
  npx prisma db push --skip-generate || echo "WARN: db push failed (DB may not be configured)"
fi

echo "==> Seeding database..."
npx prisma db seed

# Logs directory
mkdir -p logs

# PM2: reload if running, else start
echo "==> Restarting PM2..."
if pm2 describe addisonsdisease &>/dev/null; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi

# Save PM2 process list so it survives reboot
pm2 save

echo ""
echo "==> Deploy complete."
pm2 status addisonsdisease
