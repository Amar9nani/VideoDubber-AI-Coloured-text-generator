#!/bin/bash

echo "Building application for production..."
npm run build

# Copy the static fallback file in case of issues with the React app
echo "Setting up fallback static page..."
mkdir -p dist
cp -r static/* dist/
cp -r public/* dist/

# Create direct access to static version
cp static/index.html dist/static.html

# Create a specific path for Netlify success page
cp static/index.html dist/success.html
mkdir -p dist/static
cp static/index.html dist/static/index.html

echo "Build complete. Files in dist/ are ready for Netlify deployment."
echo "Remember to upload the entire dist/ directory to Netlify."