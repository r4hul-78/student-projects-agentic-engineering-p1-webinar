# Sillico Sapiens — Showcase Web Application

This directory contains the production showcase application for the Sillico Sapiens technical community, highlighting projects built during the **Agentic Engineering** webinars and practical workshops.

## 🛠️ Technology Stack

- **Framework:** React 19 (TypeScript)
- **Bundler / Dev Server:** Vite 8
- **Styling:** Custom CSS Design System based on `design.md` (Design tokens, pale cyan, deep teal, and restrained circuit line accents)
- **Icons:** Lucide React & Custom SVG illustrations
- **Testing:** Vitest & React Testing Library (14 automated unit/integration tests)
- **Linter:** Oxlint

## 📂 Architecture & Directory Structure

```text
showcase/
├── index.html              # HTML shell with Google Fonts (Space Grotesk & Inter) & meta tags
├── vite.config.ts          # Vite configuration with relative base path & Vitest setup
├── tsconfig.json           # Root TypeScript configuration
├── package.json            # Scripts and dependencies
├── src/
│   ├── main.tsx            # Application entrypoint
│   ├── App.tsx             # Route management, theme persistence & modal controller
│   ├── index.css           # Central design system stylesheet with CSS variables
│   ├── types/
│   │   └── project.ts      # TypeScript interfaces for Project, Author, and Categories
│   ├── data/
│   │   └── projects.ts     # Authoritative project dataset verified from submissions
│   ├── components/
│   │   ├── Navbar.tsx      # Responsive header with brand, navigation, and theme switcher
│   │   ├── Footer.tsx      # Community footer with verified repo links & licensing
│   │   ├── ProjectCard.tsx # Responsive card with verified tags, preview & actions
│   │   ├── ProjectModal.tsx# Detail view (problem statement, features, run guide)
│   │   ├── ProjectPreview.tsx # Tailored vector visual preview for each project
│   │   ├── FilterBar.tsx   # Real-time search, category chips, tech filter & sorting
│   │   ├── EmptyState.tsx  # Zero-results feedback with reset trigger
│   │   ├── CircuitDivider.tsx # Restrained circuit trace visual separator
│   │   └── GithubIcon.tsx  # Accessible GitHub SVG icon
│   ├── pages/
│   │   ├── HomeView.tsx    # Hero section, metrics, featured builds & community philosophy
│   │   ├── ExploreView.tsx # Complete project directory with live multi-filtering
│   │   ├── ContributorsView.tsx # Verified student creator directory
│   │   ├── AboutView.tsx   # Sillico Sapiens mission and agentic engineering principles
│   │   └── SubmitView.tsx  # 4-step GitHub contribution guide and README template
│   └── test/
│       ├── setup.ts        # Vitest setup with jest-dom matchers
│       ├── projects.test.ts# Dataset integrity & privacy tests
│       └── showcase.test.tsx # UI component interaction tests
└── dist/                   # Production build output
```

## 🚀 Development & Build Commands

All commands are run from the `showcase/` directory:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run automated tests (Vitest)
npm test

# Run TypeScript type check
npm run typecheck

# Run linter
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

The showcase application compiles to static HTML, CSS, and JavaScript in `showcase/dist/`.

### Deploying to GitHub Pages
1. Configure Vite `base: './'` (already configured).
2. Set up GitHub Actions workflow or deploy from the `main` branch with the `dist/` folder or via the official `actions/deploy-pages` action.
3. Client-side hash routing (`/#projects`, `/#contributors`, `/#about`, etc.) ensures direct URL navigation and page refreshes work without 404 rewrite issues.

### Deploying to Vercel or Netlify
- **Root Directory:** `showcase`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## ➕ Adding a New Student Project

1. Verify the student has created their project folder at the repository root (e.g., `StudentName_ProjectName/`).
2. Open `showcase/src/data/projects.ts`.
3. Add a new `ProjectItem` entry to the `PROJECTS` array, extracting accurate details from the student's `README.md`.
4. Run `npm test` and `npm run build` to verify dataset integrity.
