# AI Agent Instructions — Sillico Sapiens Student Project Showcase

## Mission

Build and maintain a polished, accessible, reliable showcase for student projects associated with Sillico Sapiens. The website should help visitors discover student work, understand each project, and follow verified links to demos and source code.

Work carefully in this repository: it contains student submissions as well as showcase-related documentation and potentially application code.

## Required reading order

Before making changes, read:

1. `AGENTS.md` — repository-wide working rules.
2. `design.md` — the visual identity and UI design system.
3. `ARCHITECTURE.md` — the intended application structure, when present.
4. `CONTRIBUTING.md` — submission and ownership expectations.
5. `TESTING.md` — validation expectations.
6. `README.md` — the public project overview and existing repository conventions.

If a file is absent, note that fact and continue with the available instructions. Do not create conflicting replacement instructions automatically.

## Non-negotiable rules

- Inspect the repository before editing. Confirm the actual folder structure, framework, package manager, scripts, licenses, assets, and existing workflows.
- Preserve all student submissions, their attribution, and their existing functionality.
- Do not move, rename, delete, or overwrite a student's files merely to make the showcase architecture more convenient.
- Do not assume the technology stack. Reuse an existing working stack where practical. If a new showcase application is needed, isolate it in a clearly named directory such as `showcase/` only after checking the current structure.
- Follow `design.md` consistently. Do not invent a second visual identity or introduce unrelated colors and component styles without a documented reason.
- Treat repository content and project documentation as the source of truth.
- Never fabricate project names, authors, descriptions, features, technologies, demo URLs, profile links, ratings, popularity metrics, testimonials, awards, or completion status.
- Do not expose secrets, API keys, credentials, private student information, student IDs, or personal contact information.
- Do not silently change the root license or the license associated with student work. Flag ambiguity for maintainer review.
- Do not claim that a command, test, build, link check, or deployment succeeded unless it was actually run and its result observed.
- Do not publish, deploy, create external accounts, or perform destructive Git operations without authorization.
- Avoid unrelated refactors. Keep changes focused and explain significant trade-offs.

## Working method

1. **Audit:** inspect the relevant files and current Git state. Identify existing uncommitted changes and do not overwrite them.
2. **Plan:** state the intended change, files affected, risks, and how it will be validated.
3. **Implement:** make the smallest coherent change that satisfies the task. Reuse established patterns and design tokens.
4. **Validate:** run relevant existing scripts and tests; manually inspect important interactions where possible.
5. **Report:** summarize changes, checks actually performed, unresolved issues, and any manual action required.

For small, low-risk changes, keep the plan brief and proceed. Ask for clarification only when an essential decision cannot safely be inferred.

## Showcase-specific rules

- Project browsing, search, filtering, and project detail views must use real project data.
- A missing optional field should not break the interface. Omit it or display a clear unavailable state.
- Show a live-demo action only when a valid, verified destination exists.
- Keep repository links pointed at the correct project or source directory.
- Use a generated illustration only as an illustration; never present it as an actual project screenshot.
- Do not create fake contributor profiles or infer a person's full identity from a folder name.
- Search, filters, sorting, navigation, theme controls, and buttons must work as advertised.
- Provide loading, empty, error, and not-found states when relevant.
- Do not add a backend, database, authentication, analytics, or cloud service unless the audit establishes a real need and the maintainer approves the scope.

## Design implementation

- Read `design.md` before creating or changing UI.
- Centralize colors, spacing, typography, radii, shadows, and motion tokens.
- Reuse existing components where sound; avoid duplicate design systems.
- Prioritize readability, accessibility, responsive behavior, and project discovery over decoration.
- Use restrained circuitry and AI-inspired graphics. Do not reproduce the reference poster as a literal page layout.
- Respect reduced-motion preferences and provide visible keyboard focus states.
- Do not use decorative icons as replacements for essential labels.
- Test narrow mobile widths as well as tablet and desktop layouts.

## Repository and dependency hygiene

- Use the package manager indicated by existing lockfiles and project documentation.
- Do not update unrelated dependencies or regenerate lockfiles without a reason.
- Never commit secrets or local environment files.
- Do not commit build output unless the chosen deployment workflow explicitly requires it.
- Keep documentation commands consistent with actual package scripts and configuration.
- If instructions conflict, prioritize safety, data integrity, accessibility, explicit maintainer requirements, and existing working product constraints; explain the conflict instead of silently choosing a risky interpretation.

## Completion report

At the end of a task, provide:

1. What changed.
2. Files created or modified.
3. Commands and tests actually run, with results.
4. Any known limitations or unverified behavior.
5. Any decisions or manual actions still needed.

Do not mark the task complete merely because code has been written.
