# Ayesha Saleem — Portfolio

Bold & colorful React portfolio for **Ayesha Saleem, BSIT Student | AI Intern**.
Built with React + Vite. Deploys free on GitHub Pages.

## What's inside

- **Hero** — photo in a rotating rainbow gradient ring, floating skill badges, stats,
  plus a 3D wireframe icosahedron + particle starfield canvas background
  (hand-rolled, zero dependencies) and an animated gradient headline
- **Skills marquee** — infinite scrolling strip of her stack
- **About** — bio + quick facts
- **Skills** — 6 color-coded groups (Languages, Data & AI, Backend, Frontend, CS Core, Tools)
- **Projects** — all 7 GitHub repos with 3D mouse-tilt cards, AI/backend work featured first, live demo link on the To-Do app
- **Journey** — SafeX internship + BSIT education timelines
- **Contact** — email, GitHub, LinkedIn (no phone, as requested)
- **CV download** — her CV PDF is bundled (`public/ayesha-saleem-cv.pdf`)

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL.

## Put it on GitHub Pages (free, ~5 minutes)

1. Create a **new public repo** on GitHub, e.g. `portfolio`.
2. Push this project to its `main` branch:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/ayeshasaleem1444-droid/portfolio.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages** → under *Build and deployment* pick
   **GitHub Actions**. (The workflow file `.github/workflows/deploy.yml`
   is already in this project — the first push triggers it automatically.)
4. Wait ~1 minute. Your site is live at
   `https://ayeshasaleem1444-droid.github.io/portfolio/`

Every future `git push` to `main` redeploys automatically.

## Updating content

- **Projects / skills / bio:** edit `src/data/content.js` — everything lives there.
- **Photo:** replace `public/profile.jpg`.
- **CV:** replace `public/ayesha-saleem-cv.pdf` (keep the same file name).
- **Colors / styling:** `src/index.css` (CSS variables at the top: `--pink`, `--cyan`, …).

Then rebuild & push — the site updates itself.
