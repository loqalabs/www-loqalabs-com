# Loqa Labs Website

The official website for Loqa Labs - a privacy-first, local voice assistant platform.

## About Loqa

Loqa is a local-first voice assistant that runs entirely offline, featuring hardware "pucks" for room-scale voice capture and a local hub that handles STT, LLM parsing, and command chaining.

## Development

Install dependencies:

```bash
yarn install
```

Start development server:

```bash
yarn dev
```

## Building

Create a production build:

```bash
yarn build
```

Preview the production build:

```bash
yarn preview
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch. It will be available at `www.loqalabs.com`.

## Tech Stack

- **Framework:** SvelteKit with static adapter
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Deployment:** GitHub Pages with custom domain
- **Code Quality:** ESLint + Prettier

## License

AGPLv3 Licensed - see [main Loqa organization](https://github.com/loqalabs) for details.