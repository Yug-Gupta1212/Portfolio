# Portfolio 

Personal portfolio built with Vite + React showcasing projects, experience, and skills.

## Features

- 3D scene integrations via Spline and Three.js
- Responsive single-page layout
- Pages: About, Projects, Experience, Skills, Certifications, Contact

## Local development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` that builds the Vite app and deploys it to GitHub Pages on pushes to `main`.

After the first successful run, the site should be available at:

```
https://Yug-Gupta1212.github.io/Portfolio/
```

## Author

Yug Gupta

## License

MIT
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
