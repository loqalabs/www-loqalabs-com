[![Sponsor](https://img.shields.io/badge/Sponsor-Loqa-ff69b4?logo=githubsponsors&style=for-the-badge)](https://github.com/sponsors/annabarnes1138)
[![Ko-fi](https://img.shields.io/badge/Buy%20me%20a%20coffee-Ko--fi-FF5E5B?logo=ko-fi&logoColor=white&style=for-the-badge)](https://ko-fi.com/annabarnes)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL--3.0-blue?style=for-the-badge)](LICENSE)
[![Made with ❤️ by Loqa Labs](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F-by%20LoqaLabs-ffb6c1?style=for-the-badge)](https://loqalabs.com)

# 🌐 Loqa Labs Company Website

[![CI/CD Pipeline](https://github.com/loqalabs/www-loqalabs-com/actions/workflows/deploy.yml/badge.svg)](https://github.com/loqalabs/www-loqalabs-com/actions/workflows/deploy.yml)

The official website for Loqa Labs - showcasing our local-first voice assistant platform and open-source projects.

## Overview

This website serves as the primary web presence for Loqa Labs, featuring:

- **Product Showcase**: Information about the Loqa voice assistant system
- **Documentation Hub**: Links to project documentation and getting started guides  
- **Open Source**: Showcasing our commitment to open-source development
- **Contact Information**: Ways to connect with the Loqa Labs team
- **Community Resources**: Links to GitHub, Discord, and other community platforms

## Tech Stack

- **Vue 3** with Composition API and TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling and responsive design
- **Vue Router** for client-side routing
- **GitHub Pages** deployment via GitHub Actions

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Building for Production

```bash
# Type check and build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable Vue components
├── views/              # Page-level components
├── router/             # Vue Router configuration
├── assets/             # Static assets (images, fonts, etc.)
├── App.vue             # Root component
├── main.ts             # Application entry point
└── style.css           # Global styles and Tailwind imports
```

## Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The deployment workflow handles:

- Building the Vue.js application
- Optimizing assets for production
- Deploying to the `gh-pages` branch
- Making the site available at https://loqalabs.com

## Contributing

We welcome contributions to improve the website! Please see our [Contributing Guidelines](https://github.com/loqalabs/loqa/blob/main/CONTRIBUTING.md) for details.

## License

This project is licensed under the GNU Affero General Public License v3.0. See [LICENSE](LICENSE) for details. 
 
 
