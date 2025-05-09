#!/bin/bash

# Force Node.js 20.x for the build
export NODEJS_VERSION=20.x

# Run the build
npm run build

# Update the runtime in the Vercel function configuration
find .vercel/output/functions -name '.vc-config.json' -type f -exec sed -i '' 's/nodejs18.x/nodejs20.x/g' {} \; 