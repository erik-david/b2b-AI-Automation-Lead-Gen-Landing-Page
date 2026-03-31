# Implementation Plan: Metadata & Social Graphics Enhancement

This plan outlines the steps to replace the default "Bolt" metadata with robust, SEO-optimized metadata and a custom high-resolution snapshot of the website.

## 1. Asset Generation
- **Website Snapshot**: Use the browser automation tool to capture a high-resolution, wide-angle screenshot of the Hero section (1200x630 pixels - the standard for Open Graph).
- **Optimization**: Compress the generated image to ensure fast loading while maintaining visual clarity.
- **Location**: Save the image as `public/og-image.png`.

## 2. Robust Metadata Implementation
Complete overhaul of the `<head>` section in `index.html` to include:

### SEO Basics
- **Metadata Title**: B2B AI Automation Agency | Stop Wasting Time on Manual Tasks
- **Meta Description**: Replace manual work and disconnected tools with seamless, high-performance AI automation. Request your free 15-minute automation audit today.
- **Keywords**: AI Automation, B2B Efficiency, Workflow Optimization, Business Process Automation.
- **Canonical URL**: Dynamic placeholder for production domain.

### Social Media (Open Graph)
- `og:type`: website
- `og:url`: [Production URL]
- `og:title`: B2B AI Automation Agency
- `og:description`: Replace manual work with high-performance AI automation.
- `og:image`: `/og-image.png` (The custom snapshot)

### Twitter Cards
- `twitter:card`: summary_large_image
- `twitter:title`: B2B AI Automation Agency
- `twitter:description`: Seamless, high-performance AI automation for B2B.
- `twitter:image`: `/og-image.png`

### Branding & UX
- **Theme Color**: Set to the primary navy brand color (`#0d1117` or similar from the theme).
- **Favicon Update**: Ensure the Vite icon is replaced with a custom brand-consistent SVG.

## 3. Implementation Steps
1. **Snapshot Development**: Launch the site, capture the Hero section visually.
2. **Asset Management**: Place the screenshot in the `public` directory.
3. **HTML Update**: Inject the robust meta tags into `index.html`.
4. **Validation**: Test the Open Graph tags for correct mapping.

---
**Next Step**: Once approved, I will generate the snapshot and update the file.
