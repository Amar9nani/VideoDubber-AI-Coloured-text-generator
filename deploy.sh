#!/bin/bash

echo "Building application for production..."
npm run build

# Copy the static fallback file in case of issues with the React app
echo "Setting up fallback static page..."
mkdir -p dist
cp -r static/* dist/
cp -r public/* dist/

echo "Build complete. Files in dist/ are ready for Netlify deployment."
echo "Remember to upload the entire dist/ directory to Netlify."