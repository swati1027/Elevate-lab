# Kindling — Landing Page

A clean, responsive marketing landing page for **Kindling**, a productivity tool for small teams that turns rough ideas into shared plans without meetings or spreadsheets.

## Live Preview

Open `index.html` in any modern browser to view the page locally.

## Features

- Sticky, blurred-glass navigation header with a mobile hamburger menu
- Hero section with primary and ghost call-to-action buttons
- Three-column feature grid (Capture, Shape, Ship) that collapses gracefully on tablet and mobile
- Call-to-action band to drive sign-ups
- Footer with brand, links, and social icons
- Fully responsive layout (desktop, tablet, mobile breakpoints)
- Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript** — mobile nav toggle (no frameworks or build tools)
- **Google Fonts** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) and [Inter](https://fonts.google.com/specimen/Inter) (body)

## Project Structure

```
.
├── index.html      # Page markup and structure
├── style.css       # All styling, design tokens, and responsive rules
└── README.md       # Project documentation
```

## Getting Started

No build step or dependencies required.

1. Clone the repository:
   ```bash
   git clone  https://github.com/swati1027/Elevate-lab.git
   
   ```
2. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Customization

Design tokens (colors, fonts, spacing, radius) are defined as CSS custom properties at the top of `style.css` under `:root`, making it easy to re-theme the page by editing a few variables:

```css
:root {
  --ink: #1d1a17;
  --paper: #fbf8f3;
  --moss: #3f5b46;
  --ember: #c1572d;
  ...
}
```

## Browser Support

Works in all modern browsers that support CSS Grid, Flexbox, and `backdrop-filter` (Chrome, Firefox, Safari, Edge — latest versions).

## License

This project is open source and available under the [MIT License](LICENSE).