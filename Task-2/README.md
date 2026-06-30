# Ledger — A To-Do List Web App

A dynamic, front-end-only to-do list styled as a notebook ledger page. Add tasks, mark them complete, and remove them — all instantly, with no page reloads and no backend.

## Live Preview

Open `index.html` in Chrome, or right-click it in VS Code and choose **"Open with Live Server"**.

## Features

- Add new tasks via input field + Add button (or press Enter)
- Mark tasks complete/incomplete with a checkbox (toggles a strikethrough style)
- Remove individual tasks with a Remove button
- Live task counter ("X tasks left") in the footer
- "Clear completed" button to bulk-remove finished tasks
- Inline validation message if you try to add an empty task
- Empty state shown when the list has no tasks
- Fully responsive (desktop and mobile)
- Keyboard-accessible with visible focus states
- Respects `prefers-reduced-motion` for users sensitive to animation

## Tech Stack

- **HTML5** — semantic markup, no frameworks
- **CSS3** — custom properties, Flexbox, no build tools
- **Vanilla JavaScript** — DOM manipulation, event delegation, no libraries
- **Google Fonts** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (body/mono)

## Project Structure

```
.
├── index.html      # Page markup and structure
├── style.css       # Styling, design tokens, responsive rules
├── script.js       # App logic (add, complete, remove tasks)
└── README.md       # Project documentation
```

## Getting Started

No installation or dependencies required.

1. Clone the repository:
   ```bash
   git clone https://github.com/swati1027/Elevate-lab.git
   cd ledger-todo-app
   ```
2. Open `index.html` directly in your browser, **or** serve it with Live Server in VS Code for auto-reload while editing:
   - Install the "Live Server" extension in VS Code
   - Right-click `index.html` → **Open with Live Server**

## How It Works

- Tasks are stored in an in-memory JavaScript array (`tasks`), so the UI re-renders instantly on every change — no page reload needed.
- Each task has an `id`, `text`, and `completed` flag.
- The list is rebuilt from that array every time a task is added, toggled, or removed, keeping the UI and state in sync.

> **Note:** Since this is a front-end-only app with no backend or storage, tasks reset when you refresh the page. To persist tasks across reloads, you'd add `localStorage` — happy to add that if needed.

## Customization

Design tokens (colors, fonts) are defined as CSS custom properties at the top of `style.css` under `:root`:

```css
:root {
  --paper: #f6f3ec;
  --ink: #232017;
  --red: #b3402c;
  --green: #4c6b4f;
  ...
}
```

## Browser Support

Works in all modern browsers that support CSS custom properties and Flexbox (Chrome, Firefox, Safari, Edge — latest versions).

## License

This project is open source and available under the [MIT License](LICENSE).
