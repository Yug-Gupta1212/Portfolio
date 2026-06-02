# 🌐 Portfolio 3D — Yug Gupta

> A personal portfolio built with **React + Vite**, featuring immersive 3D scene integrations via Spline and Three.js, a fully responsive single-page layout, and smooth navigation across all major sections.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=flat-square&logo=threedotjs)](https://threejs.org/)
[![Spline](https://img.shields.io/badge/Spline-3D-FF6B6B?style=flat-square)](https://spline.design/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=flat-square&logo=github)](https://Yug-Gupta1212.github.io/Portfolio/)

---

## ✨ Features

- **3D Scene Integrations** — Interactive 3D visuals powered by [Spline](https://spline.design/) and [Three.js](https://threejs.org/)
- **Responsive Single-Page Layout** — Fluid design that adapts seamlessly from mobile to desktop
- **Smooth Navigation** — Anchor-based scrolling across all sections without page reloads
- **Sections Included:**
  - 🙋 **About** — Introduction and personal summary
  - 💼 **Projects** — Showcase of key works with links and descriptions
  - 📈 **Experience** — Professional and internship history
  - 🛠️ **Skills** — Technologies and tools used
  - 🏅 **Certifications** — Earned credentials and courses
  - 📬 **Contact** — Ways to get in touch

---

## 🗂️ Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── sections/           # Page sections (About, Projects, etc.)
│   ├── assets/             # Images, icons, 3D models
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Actions deployment workflow
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### 1. Clone the repository

```bash
git clone https://github.com/Yug-Gupta1212/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🌍 Deployment

This project is deployed to **GitHub Pages** via a GitHub Actions CI/CD workflow.

### How it works

Every push to the `main` branch triggers the workflow at `.github/workflows/pages.yml`, which:

1. Checks out the repository
2. Installs Node.js dependencies
3. Runs `npm run build` to generate the `dist/` folder
4. Deploys the built assets to the `gh-pages` branch

### Live Site

```
https://Yug-Gupta1212.github.io/Portfolio/
```

> **Note:** After the first successful workflow run, GitHub Pages may take a few minutes to propagate. Make sure GitHub Pages is enabled in your repository settings under **Settings → Pages → Source: Deploy from a branch (gh-pages)**.

### Vite base path

Ensure `vite.config.js` includes the correct base path for GitHub Pages:

```js
// vite.config.js
export default {
  base: '/Portfolio/',
}
```

---

## 🧩 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI component framework |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [Spline](https://spline.design/) | Interactive 3D scene editor |
| [@splinetool/react-spline](https://www.npmjs.com/package/@splinetool/react-spline) | Spline React integration |
| [GitHub Actions](https://github.com/features/actions) | CI/CD for automated deployment |
| [GitHub Pages](https://pages.github.com/) | Static site hosting |

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Yug Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Author

**Yug Gupta**

- GitHub: [@Yug-Gupta1212](https://github.com/Yug-Gupta1212)
- Portfolio: [yug-gupta1212.github.io/Portfolio](https://Yug-Gupta1212.github.io/Portfolio/)

---

<p align="center">Made with ❤️ and Three.js by Yug Gupta</p>
