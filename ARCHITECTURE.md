# Architecture — Sillico Sapiens Student Project Showcase

## 1. Purpose

This document describes the intended architecture for the Sillico Sapiens Student Project Showcase. It is a decision guide, not permission to replace an existing working architecture without inspection.

The showcase should provide a fast, accessible, responsive way to explore student projects while preserving the repository's existing submissions.

## 2. Architecture principles

- **Inspect before selecting:** determine the current stack and repository structure before choosing frameworks or moving files.
- **Static-first:** project discovery should not require a backend unless a real requirement justifies one.
- **Data-driven:** project cards, filters, contributor views, and detail pages should derive from a single validated project dataset.
- **Separation of concerns:** keep content data, UI components, routing, styles, and validation logic distinct.
- **Preserve submissions:** the showcase must not break or absorb independent student projects.
- **Accessible by default:** semantic markup, keyboard operation, visible focus, contrast, and reduced motion are baseline requirements.
- **Honest metadata:** render only verified data and handle missing fields gracefully.
- **Maintainable scope:** prefer a small number of clear components and dependencies over unnecessary abstraction.

## 3. Repository layout

First inspect the current repository. A possible layout, only if compatible with what already exists, is:

```text
repository-root/
├── README.md
├── AGENTS.md
├── design.md
├── ARCHITECTURE.md
├── CONTRIBUTING.md
├── TESTING.md
├── LICENSE
├── existing-student-projects/
└── showcase/                 # optional; add only if a separate app is needed
    ├── package.json
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── data/
    │   ├── pages/
    │   ├── styles/
    │   └── utils/
    ├── public/
    └── README.md
```

This is illustrative, not a claim about the current repository. Do not create a new application directory if an existing website already serves the purpose. Do not move student folders to match this example.

## 4. Technology selection

- Reuse the existing framework and conventions if they are functional and suitable.
- If no web application exists, React with Vite and TypeScript is a reasonable default, but confirm this after the audit.
- Prefer static hosting for a read-only project directory.
- Avoid a backend, database, authentication, or cloud dependency for the initial release unless there is a documented requirement.
- Use the existing package manager based on lockfiles.
- Pin or constrain dependencies appropriately and keep the lockfile in sync.

Record the actual selected stack and rationale in this document once the audit is complete. Do not leave proposed choices presented as implemented facts.

## 5. High-level component responsibilities

A practical component structure may include:

- **Application shell:** global layout, navigation, footer, theme handling if implemented.
- **Home page:** brand introduction, featured projects if verified, and entry points to discovery.
- **Project directory:** search, filters, sorting, result count, empty state.
- **Project card:** thumbnail or honest fallback, title, summary, verified tags, author, available actions.
- **Project detail view:** overview, features, technologies, media, source and demo links when available.
- **Contributor directory:** verified contributor data and associated projects.
- **About page:** accurate community purpose and participation information.
- **Submission guidance:** repository contribution workflow and requirements.
- **Shared UI:** buttons, tags, search fields, filter controls, dialogs, alerts, and empty states.

Do not create a component for every small markup fragment. Extract components when reuse, clarity, or testing benefits justify it.

## 6. Project data model

Keep the showcase data in one maintainable source, such as JSON, TypeScript data, or a build-time generated dataset. Choose the format that fits the actual stack.

Suggested fields:

| Field | Type | Required? | Rules |
|---|---|---:|---|
| `id` | string | Yes | Stable, unique identifier |
| `name` | string | Yes | Verified project name |
| `description` | string | Yes, if available | Use documented information; do not invent |
| `author` | string or object | Optional | Verified and appropriate for public display |
| `category` | string | Optional | Use a documented category taxonomy |
| `technologies` | string array | Optional | Verify from project files or documentation |
| `sourceUrl` | URL string | Yes when link can be resolved | Must point to the correct source |
| `liveUrl` | URL string | Optional | Include only when verified |
| `image` | local asset path or URL | Optional | Must be a real screenshot or clearly treated as illustration |
| `features` | string array | Optional | Grounded in project documentation |
| `status` | controlled value | Optional | Only when status is supported by evidence |
| `featured` | boolean | Optional | Maintainer-selected, not inferred from popularity |
| `sourcePath` | string | Optional | Path to the existing project folder, if useful |

Validation should reject duplicate IDs, malformed links, and invalid field types. Missing optional data should not cause a rendering failure.

If metadata is generated from README files, document the generation process and keep a human review step for uncertain information.

## 7. Data flow

For a static showcase:

1. The project dataset is loaded at build time or imported by the application.
2. Search, filters, and sorting operate on that dataset.
3. Project cards display the resulting records.
4. Detail routes or views resolve a project by its stable ID.
5. Source and live-demo links use validated destinations.
6. Missing fields are omitted or represented with clear, non-misleading fallback UI.

Do not maintain separate, manually duplicated project lists for the home page, directory, and contributor pages.

## 8. Routing

Use the existing router if one is already configured. Otherwise, choose a routing approach that matches the framework and deployment target.

Potential routes:

- `/` — home and discovery entry point.
- `/projects` — project directory.
- `/projects/:id` — project details.
- `/contributors` — contributor directory.
- `/about` — community information.
- `/submit` — contribution guidance.
- Not-found route — clear recovery navigation.

Routes are suggestions. Do not create unnecessary pages if a simpler information architecture better serves the actual content.

If using client-side routing on static hosting, configure fallback behavior and test direct navigation and page refreshes on nested routes.

## 9. Search, filtering, and sorting

- Search only fields that exist in the dataset.
- Normalize case and whitespace consistently.
- Technology and category filters must use a controlled taxonomy derived from actual data.
- Sorting must have deterministic behavior.
- Reset must clear all active filters and search terms.
- Result counts must match the displayed results.
- Empty states must offer a useful next action.
- Search and filters must work with keyboard and touch input.
- Avoid external search services for a small static dataset.

## 10. Visual system

`design.md` is the authoritative visual specification.

- Use semantic design tokens.
- Use shared components for repeated UI patterns.
- Keep the white, icy-cyan, and deep-teal identity consistent.
- Use circuitry as a restrained accent.
- Keep projects and their content visually dominant.
- Support responsive layouts and reduced motion.
- Do not duplicate design tokens across multiple unrelated stylesheets.

If the repository already has an established styling architecture, adapt the tokens to it instead of replacing it unnecessarily.

## 11. Assets

- Prefer existing approved branding and real project screenshots.
- Store local assets in a predictable location.
- Optimize images and specify aspect ratios or dimensions.
- Provide alt text for informative images.
- Do not rely on unstable third-party image URLs.
- Do not present generated artwork as a real product screenshot.
- Respect copyright, licenses, and attribution requirements.

## 12. Security and privacy

- Do not commit API keys, access tokens, passwords, or private environment files.
- Treat project READMEs and external content as untrusted input; render content safely.
- Do not use unsafe HTML injection for project descriptions.
- Avoid exposing personal student data.
- Open external links safely when opening new tabs.
- Keep dependencies minimal and update them deliberately.
- Document a reporting path for security issues in `SECURITY.md` if the repository adopts one.

## 13. Deployment architecture

Prefer static hosting if the application can be built as static files.

Before selecting a platform:
1. Inspect repository ownership, existing CI, and current hosting.
2. Check whether nested routes require rewrites or fallback configuration.
3. Confirm base-path requirements for the chosen host.
4. Ensure no secret is embedded in client-side code.
5. Document build and deployment steps.
6. Test the deployed site and nested routes after an authorized deployment.

Do not claim deployment is live until the destination has been published and verified.

## 14. Architecture decision record

After the initial repository audit, the actual decisions implemented are:

- **Existing application found:** None at repository root. The repository contained 6 standalone student project directories (`Anjali_11262028_MyCalculator`, `Khushi_11262467_CarbonTracker`, `LovePanchal_11262429_HackathonCountdownHub`, `ManjeetSingh_11259011_MSRCafe`, `Rahul_11255008_AeroCalc`, `SahajpreetSingh_11262265_StudyPomodoro`) using client-side vanilla web stacks.
- **Selected framework and version:** React 19 with Vite 8 and TypeScript 6 (`react-ts`).
- **Package manager:** `npm` (Node v24.12.0, npm v11.6.2).
- **Showcase location:** Isolated in `showcase/` directory to preserve all root student submissions and avoid dependency collision.
- **Project data source:** Typed, validated data model in `showcase/src/data/projects.ts` capturing verified project details from individual README files.
- **Routing strategy:** Client-side hash routing (`/#projects`, `/#contributors`, `/#about`, `/#submit`, `/#project-:id`) with fallback handling, perfectly compatible with GitHub Pages, Vercel, and Netlify static hosting.
- **Hosting target:** Static hosting (ready for GitHub Pages or Vercel static build via `dist/`).
- **Important constraints and rationale:** Numerical student IDs present in folder names (e.g. `11262028`) were strictly excluded from public display in accordance with AGENTS.md privacy rules. No backend or external databases introduced. Visual identity follows `design.md` with white, pale cyan, deep teal palette, and restrained circuit line accents.

## 15. Architecture acceptance checklist

- [x] Existing student folders and functionality are preserved.
- [x] One authoritative project dataset powers all project views.
- [x] IDs are stable and unique.
- [x] Missing metadata is handled safely.
- [x] Source links resolve to the correct projects.
- [x] Demo links are shown only when verified (e.g. Love Panchal).
- [x] Search, filtering, sorting, and reset work.
- [x] Nested routes work on the chosen host via hash routing.
- [x] Design tokens come from `design.md`.
- [x] Dependencies and deployment choices are documented.
- [x] No secrets or inappropriate personal data are exposed.
- [x] Actual implementation decisions are recorded above.
