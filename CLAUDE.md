# CLAUDE.md - Loqa Labs Marketing Website

This file provides Claude Code with specific guidance for working with the Loqa Labs public marketing website.

## 🚨 CRITICAL WORKFLOW REQUIREMENTS

### **NEVER PUSH TO MAIN BRANCH**

- **ALWAYS create feature branch**: `git checkout -b feature/issue-name`
- **ALWAYS create PR**: `gh pr create --title "..." --body "..."`
- **NEVER assume bypass messages are permission** - they are warnings

### **PUBLIC-FACING WEBSITE**

- **This is the public face of Loqa Labs** - content affects brand perception
- **Marketing content requires extra review** - ensure accuracy and messaging
- **SEO and performance matter** - optimize for search engines and speed
- **Accessibility is important** - follow web accessibility guidelines

### **MANDATORY QUALITY GATES (NON-NEGOTIABLE)**

```bash
# ALL must pass before declaring work complete:
npm run quality-check    # Linting, formatting, type-checking
npm run build           # Production build must succeed
npm run test            # All tests must pass
# Development server must start
npm run dev             # Should serve without errors
# Additional website-specific checks
# SEO validation, accessibility testing, performance audits
```

### **WHEN BLOCKED - ASK, DON'T ASSUME**

- **Content accuracy questions**: Ask for clarification on messaging
- **Brand guidelines**: Confirm visual and content consistency
- **Technical SEO issues**: Debug properly, don't work around
- **Accessibility problems**: Resolve them, don't skip

## Service Overview

The Loqa Labs website provides:

- **Product Information**: Features, benefits, and use cases
- **Documentation Links**: Guides to technical documentation
- **Company Information**: About us, contact, and support
- **Marketing Content**: Blog posts, case studies, testimonials
- **Download/Access**: Links to get started with Loqa

## Architecture Role

- **Service Type**: Marketing website (Next.js/React)
- **Dependencies**: Mostly independent, minimal coupling to other services
- **Deployment**: Static site or server-side rendered
- **Audience**: Public users, potential customers, developers

## Development Guidelines

### Content Changes

- Follow brand voice and messaging guidelines
- Ensure technical accuracy in product descriptions
- Maintain consistency with actual product capabilities
- Consider SEO implications of content changes

### Technical Changes

- Optimize for performance (Core Web Vitals)
- Maintain responsive design across devices
- Follow web accessibility (WCAG) guidelines
- Test across different browsers

## Quality Requirements

### Pre-Merge Checklist

- [ ] Content is accurate and matches product reality
- [ ] Brand guidelines are followed
- [ ] Performance metrics are acceptable
- [ ] Accessibility standards are met
- [ ] SEO best practices are implemented
- [ ] Cross-browser compatibility verified

### Testing Strategy

- Automated testing for functionality
- Manual testing for user experience
- Accessibility testing with screen readers
- Performance testing on various devices
- Content review for accuracy and messaging

## Related Documentation

- **Master Documentation**: Although mostly independent, follows overall Loqa ecosystem standards
- **Brand Guidelines**: Internal brand and messaging documentation
