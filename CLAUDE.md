# Development Guidance

See [/loqalabs/CLAUDE.md](../CLAUDE.md) for complete development workflow guidance.

## Service Context

**www-loqalabs-com** - Marketing website and public documentation (Vue.js/Nuxt)

- **Role**: Public-facing website and documentation for Loqa platform
- **Quality Gates**: `npm run quality-check` (includes lint, format, build)
- **Development**: `npm run dev` (dev server), `npm run build` (production build)
- **Deployment**: Static site generation for GitHub Pages or CDN deployment

All workflow rules and development guidance are provided automatically by the MCP server based on repository detection.