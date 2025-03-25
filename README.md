# Discord Colored Text Generator

A web-based tool that creates colored Discord messages using ANSI color codes available on Discord desktop versions.

## Features
- Select from a range of Discord-compatible text colors
- Apply foreground and background colors
- Bold and underline formatting
- Copy formatted text for pasting into Discord

## Deployment Instructions

### Option 1: Deploy via Netlify UI (Manual Upload)
1. Run the build command locally:
   ```
   ./deploy.sh
   ```
   This will create the `dist` directory with all necessary files.

2. Go to [Netlify](https://app.netlify.com/) and log in to your account.

3. From the Netlify dashboard, select "Add new site" > "Deploy manually"

4. Drag and drop the entire `dist` folder from your local machine.

5. Wait for deployment to complete.

6. After deployment, go to "Site settings" > "Domain management" to customize your domain if desired.

### Option 2: Deploy via Netlify CLI
1. Install Netlify CLI:
   ```
   npm install netlify-cli -g
   ```

2. Build your site:
   ```
   ./deploy.sh
   ```

3. Deploy using Netlify CLI:
   ```
   netlify deploy --prod
   ```
   When prompted, select the `dist` folder as your publish directory.

### Important Notes for Netlify Deployment
- The `netlify.toml` file in this repository contains all necessary configuration.
- Single-page application routing is handled via redirects.
- A static fallback page is included to ensure the site works even if the React app fails to load.

