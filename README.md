# cargo-wise-track-main

This repository contains the Brain TDS Logistics web app.

## GitHub Pages Deployment

The project is configured to deploy from `main` using GitHub Actions.

- Vite base path: `/cargo-wise-track-main/`
- Build command: `npm run build`
- GitHub Pages workflow: `.github/workflows/pages.yml`
- Published artifact path: `dist/client`
- Published URL: `https://zakariapapistic.github.io/cargo-wise-track-main/`

## Local Development

```bash
npm install
npm run dev
```

## Deploy

When you push to `main`, GitHub Actions will build the app and publish the `dist/` folder.

## Repository

`https://github.com/Zakariapapistic/cargo-wise-track-main.git`
