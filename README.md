# Sillico Sapiens — Student Project Showcase

**Where technology meets humanity.**

A community showcase for student-built projects associated with Sillico Sapiens. The goal is to make projects easier to discover, understand, and share while preserving student authorship and the integrity of their work.

> **Repository note:** This README is a proposed refreshed root README. Before replacing an existing README, compare the current content, preserve valid project-specific information, and resolve any conflicting submission instructions with the maintainers.

## What you'll find here

- Student projects and experiments.
- Project source code and documentation.
- A showcase experience for browsing projects, technologies, and contributors.
- Guidelines for submitting and maintaining project information.

The actual contents depend on the current repository. Project descriptions, technologies, author information, and demo links should be based on verified project material rather than assumptions.

## Explore the projects

Browse the existing project directories in this repository. If a deployed showcase is available, its verified URL should be added here:

**Showcase website:** _Add the verified deployment URL when available._

**Source repository:** https://github.com/sillico-sapiens/student-projects-agentic-engineering-p1-webinar

Do not publish a placeholder URL as though it were a live website.

## Student projects

The repository has included project folders associated with names such as MyCalculator, CarbonTracker, HackathonCountdownHub, MSRCafe, AeroCalc, and StudyPomodoro. Verify the current root directory and each project's documentation before maintaining this list.

For the most accurate information, use each project's own README and source files. Do not infer features or technology stacks from a project name alone.

## Design and development documentation

| Document | Purpose |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Working rules for AI coding agents and maintainers |
| [`design.md`](design.md) | Sillico Sapiens visual identity and UI design system |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Application structure and technical decisions |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Student project submissions and contribution workflow |
| [`TESTING.md`](TESTING.md) | Quality checks and release-readiness criteria |
| `LICENSE` | Repository licensing terms; read the actual file before reuse |

These documents should be kept consistent with the implementation. If the repository does not yet contain one of the linked files, add it or adjust the link before merging.

## Contributing a project

1. Read [`CONTRIBUTING.md`](CONTRIBUTING.md).
2. Inspect the current repository structure and submission instructions.
3. Follow the maintained folder convention; do not assume a `/projects/` directory exists unless verified.
4. Include a clear README, accurate technology information, setup instructions where relevant, and genuine screenshots if available.
5. Verify all source and demo links.
6. Preserve licenses, credits, and author attribution.
7. Run relevant checks described in [`TESTING.md`](TESTING.md).
8. Submit your contribution through the repository's currently supported workflow.

Do not include passwords, API keys, tokens, private student data, or other sensitive information.

## Development

The showcase web application is located in the [`showcase/`](showcase/) directory, isolated from the student project folders to preserve submissions and prevent dependency conflicts:

```bash
cd showcase
npm install
npm run dev      # Launch local development server
npm test         # Run automated test suite
npm run build    # Build static production bundle
```

For architecture decisions and data models, see [`ARCHITECTURE.md`](ARCHITECTURE.md). For showcase-specific documentation, see [`showcase/README.md`](showcase/README.md).

## Design principles

The showcase follows the visual direction documented in [`design.md`](design.md):

- Bright white and pale-cyan surfaces.
- Deep-teal typography and restrained turquoise accents.
- Subtle engineering-inspired linework.
- Clear hierarchy and generous whitespace.
- Project-first layouts.
- Responsive and accessible interaction patterns.

The design should feel like a thoughtful engineering community, not a generic dashboard or a literal reproduction of a promotional poster.

## Quality and testing

Follow [`TESTING.md`](TESTING.md) for the applicable build, functional, responsive, accessibility, and repository-integrity checks.

Do not claim tests have passed unless they were actually run. Report known issues and skipped checks clearly.

## Licensing and attribution

Read the repository's actual `LICENSE` file and any license or attribution notices within individual student projects before reusing code or assets.

Do not assume that one repository-level license automatically resolves the rights associated with every individual contribution. Do not change student project licenses without appropriate authorization.

## Community and contact

Use the repository's verified maintainer or community channels for questions about submissions, ownership, licensing, and publication. Add public contact or social links here only after they have been verified and approved.

---

**Sillico Sapiens** — ideas, engineering, and student creativity brought together.
