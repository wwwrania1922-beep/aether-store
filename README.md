<div align="center">

# ✦ Aether Store

**A bold, motion-rich landing experience built with React + Vite**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000?style=for-the-badge&logo=vercel)](LIVE_URL)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/Pure_CSS-No_Libraries-FF4D8D?style=for-the-badge&logo=css3&logoColor=white)

[🔗 Live Demo](LIVE_URL) · [🐛 Report a Bug](https://github.com/wwwrania1922-beep/aether-store/issues)

</div>

---

## 📖 About

Aether Store is a front-end landing page that pushes past the usual template look. Everything you see — the aurora background, the magnetic button, the 3D cards — is built with **React hooks and pure CSS**. No animation libraries, no UI kits.

The page is fully **RTL (Arabic)**, responsive down to mobile, and respects the user's *reduced motion* setting.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌌 **Aurora background** | Blurred gradient blobs that drift and blend continuously |
| 🔦 **Cursor spotlight** | A soft glow that follows the mouse across the page |
| 🔄 **Rotating headline** | Words swap in with a 3D flip animation |
| 🧲 **Magnetic button** | Pulls toward the cursor and bursts into particles on click |
| 🪐 **3D orbit** | Hero image with logos orbiting around it |
| 📜 **Marquee ticker** | Tilted, infinitely scrolling feature strip |
| 🧱 **Bento grid** | Cards that reveal on scroll with an animated progress meter |
| 💻 **Live terminal** | Types out Vite commands on a loop |
| 🎴 **3D tilt cards** | Tilt with the mouse and follow it with a glowing highlight |
| 📱 **Responsive + RTL** | Arabic-first layout that adapts to any screen |
| ♿ **Accessible motion** | All animation is disabled under `prefers-reduced-motion` |

---

## 🛠️ Tech Stack

- **React** — components and hooks (`useState`, `useEffect`, `useRef`)
- **Vite** — dev server and build
- **CSS3** — custom properties, keyframes, `backdrop-filter`, 3D transforms, `color-mix()`
- **IntersectionObserver API** — scroll-reveal animations
- **Google Fonts** — Cairo & JetBrains Mono
- **Vercel** — hosting and continuous deployment

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 20 or newer

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/wwwrania1922-beep/aether-store.git

# 2. Enter the folder
cd aether-store

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the production version into `dist/` |
| `npm run preview` | Previews the production build locally |

---

## 📁 Project Structure

```
aether-store/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/          # Images and logos
│   ├── App.jsx          # Page layout and all interactive components
│   ├── App.css          # Styles, animations and responsive rules
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🌐 Deployment

The project is deployed on **Vercel** and connected to this repository.
Every push to `main` triggers a new deployment automatically:

```bash
git add .
git commit -m "describe your change"
git push
```

---

## 👩‍💻 Author

**Rania Atef** — AI Engineer & Full-Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-wwwrania1922--beep-181717?style=flat&logo=github)](https://github.com/wwwrania1922-beep)

---

<div align="center">

If you like this project, give it a ⭐ on GitHub!

</div>
