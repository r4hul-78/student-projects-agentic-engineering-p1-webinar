# Sillico Sapiens — Design System & Visual Language

> **Purpose:** This document is the single source of truth for the visual identity and user-interface design of the Sillico Sapiens Student Project Showcase.
>
> **Primary visual reference:** The Sillico Sapiens “Basics of Agentic Engineering” Part 1 poster supplied by the project owner. Keep the original image in the repository as a reference asset when licensing and repository policies permit. Suggested path: `docs/assets/Sillico-sapiens-agentic-engineering-reference.png`.
>
> **Brand idea:** Where technology meets humanity.
>
> **Design keywords:** Futuristic engineering, human–AI collaboration, clarity, curiosity, precision, accessible innovation, student creativity.

---

## 1. Design Mission

Create a polished, recognizable showcase for student-built projects that feels like it belongs to the Sillico Sapiens Technical Club.

The experience should combine:

1. **Editorial clarity:** strong typography, intentional hierarchy, generous whitespace, and content that is easy to scan.
2. **Engineering detail:** circuit-inspired linework, schematic-like dividers, geometric forms, and carefully controlled technical motifs.
3. **Human–AI collaboration:** visual cues that communicate people and intelligent tools working together, without relying on clichéd robot imagery everywhere.
4. **Project-first storytelling:** student work, descriptions, screenshots, technologies, authors, and demos must remain the focus.
5. **Trust and accessibility:** readable contrast, real links, clear states, honest metadata, and usable layouts on every screen.

This is a web design system inspired by the reference poster—not a literal reproduction of the poster. Adapt its visual language to a usable, maintainable website.

### Design priorities, in order

1. Readability and usability.
2. Project discovery and clear information architecture.
3. Brand consistency.
4. Accessibility and responsive behavior.
5. Decorative visual effects.

Never sacrifice the first two priorities for decoration.

---

## 2. Brand Foundations

### Brand name

**Sillico Sapiens**

Use this exact spelling in the interface. Do not change it to “Sillico Sapiens” or another variation unless the project owner explicitly changes the brand.

### Descriptor

**Technical Club**

Use the descriptor when a fuller identity is helpful, such as in the footer, About page, or branded introduction. Do not repeat it in every component.

### Brand tagline

**Where technology meets humanity.**

This tagline is present in the reference poster and is an approved direction for brand expression. Use it selectively, for example in the footer or About section.

### Showcase messaging direction

The website may use messaging such as:

- “Ideas to impact.”
- “Built by students. Powered by curiosity.”
- “Explore what our community is building.”
- “Where student ideas become working projects.”

Treat these as suggested copy, not mandatory text. Choose one main message and avoid stacking several slogans together.

### Brand personality

The brand should feel:

- Curious, not childish.
- Technical, not intimidating.
- Futuristic, not science-fiction themed.
- Professional, not corporate and impersonal.
- Energetic, not visually noisy.
- Community-driven, not self-congratulatory.

### Logo usage

- Prefer the official, repository-provided logo if one exists.
- Inspect assets before creating a replacement.
- Preserve the logo’s aspect ratio and original colors unless an approved variant exists.
- Do not redraw, distort, rotate, or add effects to an existing logo.
- Do not use the GitHub Octocat as if it were the Sillico Sapiens logo. The reference poster may contain a GitHub mark, but GitHub branding is separate from the club identity.
- If no approved logo asset exists, use a typographic wordmark as a temporary treatment and document that it is a placeholder.
- Ensure the logo remains legible on light and dark surfaces.

---

## 3. Visual Reference Interpretation

The reference poster establishes these visual cues:

- A predominantly white, bright canvas.
- Pale cyan and icy-blue atmospheric shapes.
- Deep teal typography and technical accents.
- Thin circuit-board traces around the edges.
- Geometric nodes, paths, and connected systems.
- Human and AI imagery in conversation or collaboration.
- Strong, condensed or bold headline typography.
- Clearly separated information blocks with thin teal borders.
- Small amounts of dark ink-like detail to add precision and contrast.

### Translate the poster into web UI

**Keep:**
- White and pale-cyan backgrounds.
- Deep teal for headings and key actions.
- Turquoise as a limited highlight.
- Fine technical linework as supporting decoration.
- Clear modular sections.
- Strong typographic hierarchy.
- A sense of human–technology collaboration.

**Adapt:**
- Poster-style headline scale into responsive web typography.
- Boxed information panels into cards and content sections.
- Circuit paths into subtle background accents, separators, or small illustrations.
- Dense poster information into scannable web content.
- AI-agent diagrams into selective explanatory visuals, not repeated decoration.

**Do not copy literally:**
- Do not place circuit traces around every card or section.
- Do not add robots, brains, hands, or AI dashboards to every page.
- Do not use a poster-like layout with all content crammed into one screen.
- Do not turn the showcase into an event-registration landing page.
- Do not use the reference poster’s date, event details, QR code, or other event-specific information as website content.
- Do not assume the poster’s illustrations or logos may be extracted and reused unless permitted.

---

## 4. Color System

The palette below is a proposed web-ready interpretation of the poster, not a claim that every value was sampled from the image. Centralize these tokens in CSS variables or the project’s existing design-token system.

### Core palette

| Token | Hex | Purpose |
|---|---|---|
| `--color-brand-950` | `#10363D` | Deepest brand ink; strongest headings and high-emphasis text |
| `--color-brand-900` | `#124650` | Primary deep teal |
| `--color-brand-800` | `#17616B` | Hover states and stronger teal surfaces |
| `--color-brand-700` | `#1D7A83` | Secondary brand actions and emphasized links |
| `--color-brand-600` | `#1597A1` | Turquoise accent for selected UI elements |
| `--color-brand-500` | `#20B4BC` | Bright highlight; use sparingly |
| `--color-cyan-200` | `#BFEFF0` | Decorative lines and soft illustrations |
| `--color-cyan-100` | `#DDF7F7` | Light accents and selected backgrounds |
| `--color-cyan-50` | `#F0FCFC` | Subtle tinted panels |
| `--color-white` | `#FFFFFF` | Main canvas and cards |
| `--color-ink-900` | `#172B30` | Main body text |
| `--color-ink-700` | `#40565B` | Secondary text |
| `--color-ink-500` | `#647A7F` | Muted text; verify contrast before use |
| `--color-border` | `#C8E0E2` | Default borders and separators |
| `--color-border-strong` | `#8FBFC3` | Emphasized borders |
| `--color-surface-muted` | `#F6FAFA` | Neutral secondary surface |

### Usage ratios

As a loose visual guide for the default light theme:

- 65–80% white or near-white surfaces.
- 10–20% pale cyan and muted neutral surfaces.
- 5–10% deep teal, dark text, and stronger structural accents.
- Small amounts of bright turquoise for focus, selection, or visual emphasis.

These are visual guidelines, not strict pixel-area measurements.

### Semantic tokens

Define semantic tokens separately from raw palette values:

```css
:root {
  color-scheme: light;

  --color-page: #ffffff;
  --color-surface: #ffffff;
  --color-surface-subtle: #f0fcfc;
  --color-surface-muted: #f6fafa;

  --color-text: #172b30;
  --color-text-secondary: #40565b;
  --color-text-muted: #647a7f;

  --color-primary: #124650;
  --color-primary-hover: #17616b;
  --color-primary-active: #10363d;
  --color-accent: #1597a1;
  --color-accent-soft: #ddf7f7;

  --color-border: #c8e0e2;
  --color-border-strong: #8fbfc3;
  --color-focus: #087f8c;

  --color-success: #24734f;
  --color-warning: #8a5b12;
  --color-danger: #b42332;
  --color-info: #17616b;
}
```

### Color rules

- Use deep teal or dark ink for important text on white.
- Bright turquoise is an accent, not a body-text color by default.
- Do not place small white text on pale cyan.
- Do not communicate status through color alone; pair status colors with text or icons.
- Verify text and interface contrast using automated tools and manual checks.
- Do not add random purple, neon pink, or unrelated gradients without a deliberate, documented reason.
- Project screenshots may contain their own colors; keep the surrounding UI neutral so the content remains coherent.

### Dark theme

A dark theme is optional, not a prerequisite. Build it only if it can be implemented consistently and tested.

If implemented:
- Use deep blue-green or charcoal surfaces, not pure black everywhere.
- Keep text near-white with sufficient contrast.
- Use turquoise sparingly for focus and selected states.
- Preserve the same semantic color roles across themes.
- Ensure project images, badges, borders, and form controls remain legible.
- Persist the preference only through an appropriate, privacy-conscious mechanism if persistence is required.

Do not let dark mode become a separate visual identity.

---

## 5. Typography

### Typographic direction

Use a modern sans-serif family with clear letterforms and strong support for Latin text. Typography should feel precise and contemporary, not overly futuristic.

Recommended first choice:
- **Headings:** Space Grotesk, if the project can load it reliably and its license/source are appropriate.
- **Body and UI:** Inter, if available and suitable.
- **System fallback:** `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

If adding external font downloads creates reliability, privacy, or performance concerns, use a system font stack. Do not block page rendering while waiting for decorative fonts.

### Type scale

Use a consistent, responsive scale. Suggested starting points:

| Role | Desktop range | Mobile range | Weight |
|---|---:|---:|---:|
| Hero heading | 3.5–5.25rem | 2.5–3.5rem | 700–800 |
| Page heading | 2.75–3.5rem | 2.1–2.75rem | 700 |
| Section heading | 1.75–2.25rem | 1.5–1.9rem | 650–700 |
| Card title | 1.125–1.375rem | 1.125–1.25rem | 600–700 |
| Body large | 1.125–1.25rem | 1.0625–1.125rem | 400–500 |
| Body | 1rem | 1rem | 400 |
| Supporting text | 0.875–0.9375rem | 0.875–0.9375rem | 400 |
| Eyebrow / metadata | 0.75–0.8125rem | 0.75–0.8125rem | 500–650 |

These ranges are guidance; tune them based on content and the chosen font.

### Typography rules

- Use sentence case for navigation, buttons, and section titles unless a deliberate brand treatment calls for uppercase.
- Reserve uppercase and letter spacing for small labels, category markers, or eyebrow text.
- Do not set long paragraphs in all caps.
- Keep paragraph line length around 45–80 characters when practical.
- Use comfortable line heights: approximately 1.5–1.75 for body copy and 1.05–1.2 for large headings.
- Avoid excessive font weights, arbitrary font sizes, and inconsistent heading levels.
- Make project names easy to scan and distinguish from metadata.
- Use tabular numerals for numeric counters if useful.
- Do not shrink text simply to force content into a card.

### Example responsive heading

```css
.hero-title {
  font-size: clamp(2.5rem, 6vw, 5.25rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
  font-weight: 750;
  text-wrap: balance;
}
```

---

## 6. Layout and Grid

### Overall layout

Use a centered content container with generous breathing room.

Suggested defaults:
- Maximum content width: 1200–1280px.
- Wide showcase or hero sections: up to approximately 1360px where needed.
- Desktop horizontal page padding: 32–48px.
- Tablet horizontal page padding: 24–32px.
- Mobile horizontal page padding: 16–20px.
- Main section spacing: 72–112px on desktop and 48–72px on mobile.
- Card grid gaps: 20–28px on desktop and 16–20px on mobile.

These values are starting points. Reuse the existing project's spacing conventions if they are already sound.

### Grid behavior

- Desktop: typically three project cards per row, depending on available width.
- Tablet: two columns where cards remain readable.
- Mobile: one column by default.
- Do not force a fixed number of columns when the content container becomes too narrow.
- Use CSS Grid or the existing layout system rather than positioning cards with absolute coordinates.
- Allow card heights to remain visually consistent without clipping important content.

Example:

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 960px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
}
```

### Whitespace

Whitespace is a core part of this design language.

- Separate major content sections clearly.
- Avoid crowding multiple unrelated calls to action into the hero.
- Use consistent vertical rhythm.
- Keep decorative graphics away from text and controls.
- Do not fill every empty area with a circuit pattern or illustration.

---

## 7. Shapes, Borders, Shadows, and Surfaces

### Border radius

Use a restrained, consistent radius system:

```css
:root {
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.25rem;
  --radius-pill: 999px;
}
```

- Small controls: small to medium radius.
- Cards and panels: medium to large radius.
- Pills and tags: fully rounded only when appropriate.
- Avoid rounding every container to the same exaggerated value.

### Borders

- Default to thin, subtle teal-gray borders.
- Use stronger borders for active, selected, or important components.
- Use divider lines to organize information, not to decorate every surface.
- Circuit-line borders should be limited to selected brand moments.

### Shadows

Prefer subtle elevation:

```css
:root {
  --shadow-card: 0 4px 18px rgba(16, 54, 61, 0.06);
  --shadow-card-hover: 0 12px 30px rgba(16, 54, 61, 0.10);
  --shadow-popover: 0 16px 40px rgba(16, 54, 61, 0.14);
}
```

- Shadows should clarify hierarchy, not simulate floating glass everywhere.
- Do not combine thick borders, heavy shadows, large glows, and gradients on the same card.
- Respect reduced-motion settings when transitions accompany elevation changes.

### Surface hierarchy

Use surfaces deliberately:
1. Main page canvas.
2. Main content card or project tile.
3. Subtle secondary panel.
4. Popover, dropdown, dialog, or other elevated overlay.

Not every section needs its own background panel.

---

## 8. Circuitry and Technical Graphic Language

Circuitry is the signature decorative motif derived from the poster.

### Appropriate uses

- A small, restrained hero background accent.
- A thin separator between selected sections.
- A subtle corner detail near the brand introduction.
- A decorative line or node in the footer.
- A small illustration explaining connected tools, workflows, or agents.

### Graphic construction

- Prefer original SVG or CSS linework.
- Use thin strokes, geometric paths, clean right-angle or gently rounded turns, and occasional circular nodes.
- Keep the paths orderly and low contrast.
- Use pale cyan for decorative traces and stronger teal only for selected details.
- Ensure SVGs have appropriate dimensions and do not create horizontal overflow.
- Treat decorative graphics as nonessential content and hide them from assistive technology when appropriate.

### Restrictions

- Do not add circuitry behind every project card.
- Do not let lines cross text, images, buttons, or focus indicators.
- Do not use animated circuit pulses continuously.
- Do not use low-contrast patterns that make text difficult to read.
- Avoid random line art that looks like a broken PCB or an unstructured network diagram.

The visual goal is precision and connectivity, not visual complexity.

---

## 9. Imagery and Illustration

### Preferred order of assets

1. Official Sillico Sapiens branding assets already in the repository.
2. Genuine student project screenshots or recordings approved for public display.
3. Original project-specific illustrations based on verified project context.
4. Simple CSS or SVG fallback artwork.
5. Other assets only when licensing, reliability, and attribution requirements are clear.

### Project thumbnails

- Prefer a consistent 16:10 or 4:3 aspect ratio.
- Use `object-fit: cover` only when cropping will not remove essential content.
- Keep the project screenshot visible and reasonably large.
- Provide useful alt text for meaningful images.
- Use empty alt text for purely decorative imagery.
- Do not label a generated illustration as a real screenshot.
- Do not reuse the same generic AI illustration for every project.
- Avoid random stock photographs unrelated to the project's function.
- Do not hotlink images from unreliable third-party sources.

### Illustration style

If new illustrations are necessary, use a coherent style:
- Clean geometric forms.
- Teal and cyan accents.
- White or transparent backgrounds where appropriate.
- Controlled gradients.
- Fine outlines and a small number of meaningful details.
- Human-centered representations of tools and systems.

Robots, neural networks, circuit brains, and human–robot hands may appear occasionally, but they must not become repetitive clichés.

### Iconography

- Prefer one consistent icon family.
- Use simple outline icons with consistent stroke weight.
- Use icons to support labels, not replace critical text.
- Avoid mixing emoji, filled icon sets, thin outline icons, and unrelated illustration styles.
- Decorative icons should not be announced by screen readers.
- Ensure icon-only controls have accessible names.

---

## 10. Motion and Interaction

Motion should make the interface easier to understand and feel responsive.

### Recommended motion

- Short color and border transitions.
- Subtle card elevation on hover.
- Small movement of an arrow or icon when a link is hovered.
- Gentle entrance transitions only where they help establish hierarchy.
- Smooth theme changes if theme switching is implemented.

Suggested duration tokens:

```css
:root {
  --motion-fast: 120ms;
  --motion-normal: 200ms;
  --motion-slow: 320ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

### Motion rules

- Keep most interactions between 120ms and 240ms.
- Do not animate every section on page load.
- Do not delay access to content for animation.
- Avoid parallax, perpetual motion, and heavy scroll-triggered effects unless there is a compelling usability reason.
- Never use animation as the only way to communicate a state.
- Respect `prefers-reduced-motion`.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Apply this carefully and test it with the application's actual interaction patterns.

---

## 11. Navigation and Header

### Header direction

The header should feel lightweight, trustworthy, and easy to use.

- Brand at the left.
- Primary navigation in a clear, compact row.
- A single prominent call to action where appropriate, such as “Submit a project.”
- Mobile navigation with an accessible open/close control.
- A visible keyboard focus state for every interactive item.
- A sticky header only if it helps navigation and does not consume too much screen space.

### Header styling

- White or lightly tinted background.
- A subtle bottom border or very restrained shadow.
- Deep teal text.
- Accent color reserved for active states and important actions.
- No oversized glowing navigation buttons.

### Navigation behavior

- Every link must navigate to a real destination.
- Clearly indicate the current page or selected navigation state.
- Mobile menus must be operable using a keyboard and screen reader.
- Escape should close a modal menu or overlay where appropriate.
- Ensure the page remains usable if JavaScript is unavailable where the chosen architecture permits progressive enhancement.

---

## 12. Hero Section

The hero should introduce the showcase immediately, rather than imitating the event poster.

### Recommended composition

- A small eyebrow label such as “Sillico SAPIENS · STUDENT PROJECTS.”
- One clear headline.
- A concise explanation of the platform.
- One primary call to action: “Explore projects.”
- One secondary action: “Submit a project” or “Meet the community.”
- Optional restrained circuit-inspired illustration or technical diagram.

### Headline direction

Possible example:

**Student ideas. Real-world builds.**

Supporting text:

“Explore projects created by our community through experimentation, engineering, and AI-assisted development.”

This copy is a suggestion. Choose content that accurately describes the current repository and community.

### Hero rules

- Do not make the hero so tall that visitors cannot discover the projects.
- Keep the headline to a manageable number of lines.
- Avoid a giant illustration that dominates the content.
- Use one strong visual focal point.
- Ensure calls to action are visible on mobile without awkward stacking.
- Do not invent statistics, awards, or claims to create visual impact.

---

## 13. Project Discovery and Project Cards

Projects are the main content of this website. Their presentation should receive more attention than decorative brand sections.

### Project card anatomy

A typical card may contain:

1. Thumbnail or verified visual fallback.
2. Category or verified status label.
3. Project title.
4. Short description.
5. Technology tags.
6. Author attribution.
7. Relevant action such as “View project.”

Only render metadata that exists and is appropriate to publish.

### Card behavior

- Make the primary interaction obvious.
- If the whole card is clickable, do not place nested links in a way that creates invalid or confusing interaction behavior.
- Maintain consistent spacing between title, description, tags, and actions.
- Clamp descriptions only when a full description remains available on the detail page.
- Show hover and keyboard focus states.
- Avoid excessive movement on hover.
- Preserve usable touch targets on mobile.
- Never imply a project is featured, verified, popular, or complete without supporting data.

### Technology tags

- Use subdued backgrounds and readable text.
- Keep the shape and spacing consistent.
- Allow tags to wrap without overflowing.
- Avoid assigning a unique random color to each technology.
- Use canonical names when they can be verified, such as React, JavaScript, Python, or CSS.
- Do not infer technologies from a project's name.

### Search and filters

- Keep search visible and easy to find.
- Give input fields visible labels or accessible names.
- Make selected filters visually clear.
- Provide an obvious reset action.
- Show the number of matching results when useful.
- Provide an informative empty state with a way to reset filters.
- Ensure filters work on the real project dataset.
- Keep controls responsive and usable on mobile.

---

## 14. Project Detail Views

Project detail pages should give each student project room to explain its purpose and demonstrate its work.

### Recommended hierarchy

1. Project title and short summary.
2. Author and category.
3. Main screenshot or visual preview.
4. Primary actions: live demo and source code, if available and verified.
5. Problem statement and project overview.
6. Features.
7. Technology stack.
8. Setup or usage instructions, where available.
9. Credits and licensing information.
10. Related projects, if the dataset supports meaningful relationships.

### Detail-page rules

- Do not fabricate missing descriptions or features.
- Use the project's existing documentation as the source of truth.
- Distinguish a missing live demo from a broken live demo.
- Verify external URLs where possible.
- Do not display a live-demo button if no valid destination exists.
- Do not expose secrets, private configuration, or personal data from a repository.
- Keep the layout readable and avoid turning the page into an endless metadata list.

---

## 15. Contributors and Community

The contributor experience should feel respectful, welcoming, and student-centered.

- Use real, approved author information from the submissions.
- Make project ownership easy to understand.
- Link to public profiles only when the links are verified and appropriate.
- Derive project counts from the actual dataset.
- Do not invent biographies, achievements, job titles, or social links.
- Do not expose private contact details.
- Do not rank students by unsupported popularity or activity.
- Keep contributor cards visually consistent with project cards.
- Let project work remain the primary evidence of contribution.

For the About page, use clear and grounded language about experimentation, learning, collaboration, and building with technology.

---

## 16. Buttons, Links, Forms, and Feedback

### Buttons

Use a small, consistent set of variants:

- **Primary:** deep teal background with readable white text.
- **Secondary:** white or pale-cyan surface with a clear border.
- **Tertiary / text:** low-visual-weight action for secondary interactions.
- **Danger:** reserved for destructive actions if any exist.

Button rules:
- Use clear action labels.
- Maintain consistent height, padding, radius, and typography.
- Provide hover, focus, active, disabled, and loading states where relevant.
- Do not make every button a pill.
- Do not use decorative arrows without purpose.

### Links

- Make links recognizable as interactive.
- Provide hover and focus states.
- Use meaningful labels rather than “click here.”
- Do not style ordinary text as a link unless it is interactive.

### Forms

For any submission or contact form:
- Use persistent labels.
- Clearly mark required fields.
- Explain validation errors next to the relevant fields.
- Preserve user-entered values after recoverable errors.
- Provide a clear success state only after actual success.
- Do not pretend a submission succeeded if there is no working submission backend or external destination.
- Prefer a verified GitHub contribution workflow when no backend is needed.

### Feedback states

Design consistent states for:
- Loading.
- Empty results.
- No search matches.
- Invalid input.
- Network or external-link failure where detectable.
- Disabled controls.
- Successful local interactions.
- Not-found pages.

Use text and, where helpful, an icon in addition to color.

---

## 17. Accessibility Requirements

Accessibility is a baseline requirement, not a visual enhancement.

Target WCAG 2.2 AA where practical and testable.

Requirements:
- Semantic landmarks and headings.
- Keyboard access to all interactive features.
- Visible focus indicators.
- Sufficient text and UI contrast.
- Labels and accessible names for inputs and icon buttons.
- Appropriate alternative text for informative images.
- No information conveyed through color alone.
- Reduced-motion support.
- Logical reading and focus order.
- Correct dialog and menu behavior.
- No keyboard traps.
- Touch targets sized for comfortable use.
- Avoid hover-only interactions.
- Ensure content remains usable at 200% zoom.
- Test mobile reflow and horizontal overflow.

Do not claim WCAG conformance without performing an appropriate audit.

---

## 18. Responsive Design

Design for real device constraints, not only for a few named screen widths.

Suggested breakpoints, adjustable to the existing framework:

```css
/* Small mobile: default styles */
/* Larger mobile / small tablet */
@media (min-width: 480px) {}

/* Tablet */
@media (min-width: 768px) {}

/* Desktop */
@media (min-width: 1024px) {}

/* Wide desktop */
@media (min-width: 1280px) {}
```

Responsive requirements:
- Avoid fixed-width layouts that overflow.
- Keep text readable without zooming.
- Reflow cards and navigation naturally.
- Avoid tiny controls.
- Ensure long project names and technology tags wrap safely.
- Keep images within their containers.
- Test both portrait and landscape mobile layouts.
- Check the actual content at narrow widths; do not rely solely on responsive preview.
- Do not hide essential project information just to save space.

---

## 19. Content, Data Integrity, and Trust

Visual design must not make unsupported information look official.

- Preserve the exact project names and author attribution found in verified source material.
- Use repository content as the source of truth.
- Do not invent project descriptions, features, technology stacks, live demos, contributors, awards, statistics, or testimonials.
- If data is incomplete, omit optional fields or clearly indicate that information is unavailable.
- Use accurate links to the relevant project directories or repositories.
- Do not imply a demo is operational without evidence.
- Do not imply a project has passed security or quality review unless it has.
- Keep licensing and attribution accurate.
- Do not silently change the license governing a student's work.
- Avoid displaying email addresses, phone numbers, student IDs, API keys, or other sensitive information.
- Keep external links safe and predictable.

The visual system must support honesty and clarity, not disguise missing information.

---

## 20. Performance and Implementation Quality

- Prefer CSS and lightweight SVG for decorative graphics.
- Avoid shipping large images when optimized alternatives exist.
- Specify image dimensions or aspect ratios to reduce layout shifts.
- Lazy-load below-the-fold images when appropriate.
- Avoid adding animation libraries for effects that CSS can handle.
- Avoid unnecessary UI dependencies.
- Use the framework and conventions already present in the repository when practical.
- Keep design tokens centralized.
- Use reusable components rather than copy-pasting styles.
- Keep CSS organized by tokens, base styles, layout, components, and utilities where appropriate.
- Do not create duplicate competing design systems.
- Test the production build after styling and asset changes.

A visually sophisticated page should still feel fast and reliable.

---

## 21. Design Tokens: Suggested CSS Foundation

Adapt the following to the project's existing architecture. Do not duplicate tokens if equivalent ones already exist.

```css
:root {
  /* Brand */
  --color-brand-950: #10363d;
  --color-brand-900: #124650;
  --color-brand-800: #17616b;
  --color-brand-700: #1d7a83;
  --color-brand-600: #1597a1;
  --color-brand-500: #20b4bc;

  /* Backgrounds */
  --color-page: #ffffff;
  --color-surface: #ffffff;
  --color-surface-subtle: #f0fcfc;
  --color-surface-muted: #f6fafa;

  /* Text */
  --color-text: #172b30;
  --color-text-secondary: #40565b;
  --color-text-muted: #647a7f;

  /* Borders and focus */
  --color-border: #c8e0e2;
  --color-border-strong: #8fbfc3;
  --color-focus: #087f8c;

  /* Shape */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.25rem;
  --radius-pill: 999px;

  /* Spacing: base unit 4px */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Layout */
  --container-width: 80rem;
  --page-gutter: 1.25rem;

  /* Shadows */
  --shadow-card: 0 4px 18px rgba(16, 54, 61, 0.06);
  --shadow-card-hover: 0 12px 30px rgba(16, 54, 61, 0.10);
  --shadow-overlay: 0 16px 40px rgba(16, 54, 61, 0.14);

  /* Motion */
  --motion-fast: 120ms;
  --motion-normal: 200ms;
  --motion-slow: 320ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

### Token rules

- Prefer semantic tokens inside components instead of raw hex values.
- Add new tokens only when there is a real recurring need.
- Do not introduce one-off colors throughout the codebase.
- If the final contrast audit requires a color adjustment, update the token centrally.
- Keep component styling consistent across all pages.

---

## 22. Recommended Component Styling

Use these as visual principles, not as a requirement to create a specific component for every item.

### Project card
- White surface.
- Thin neutral-teal border.
- Medium-to-large corner radius.
- Consistent thumbnail ratio.
- Dark title and readable description.
- Restrained teal tags.
- Subtle hover elevation.
- Clear keyboard focus state.

### Search field
- Comfortable height and padding.
- Visible label or accessible name.
- White surface with a clear border.
- Focus ring in the brand focus color.
- Search icon only if it improves recognition.
- Clear action if the field supports clearing.

### Filter control
- Clear selected state.
- Consistent dimensions.
- Keyboard operation.
- Wrapped or horizontally manageable on mobile.
- No reliance on color alone.

### Section heading
- Clear title.
- Optional short supporting sentence.
- Optional eyebrow label.
- Adequate spacing before content.
- No unnecessary decorative ornament.

### Footer
- Deep teal or restrained pale-cyan treatment.
- Brand name and tagline where appropriate.
- Useful navigation and repository links.
- Clear separation from main content.
- No fabricated social links.

---

## 23. Anti-Patterns to Avoid

Do not build the website with:
- A generic SaaS admin dashboard appearance.
- A dark-only, neon-heavy cyberpunk aesthetic.
- Excessive glassmorphism.
- Large, unrelated gradient blobs.
- Constantly animated circuit boards.
- Robots or AI illustrations on every card.
- Inconsistent card radii and spacing.
- Too many font families.
- Tiny low-contrast text.
- Decorative icons replacing labels.
- Hover effects that break mobile usability.
- Fake counters, testimonials, awards, or project metrics.
- Placeholder links that look functional.
- Generic stock imagery unrelated to the projects.
- A hero so tall that it hides the project collection.
- A different visual identity on every page.
- Overengineered effects that hurt performance or accessibility.

**Guiding rule:** If a decorative element does not improve recognition, comprehension, hierarchy, or delight, remove it.

---

## 24. How the Coding Agent Must Use This File

Before building or changing UI:
1. Read this complete file.
2. Inspect the existing application and assets.
3. Identify the reusable tokens and components already present.
4. Map this design system onto the existing architecture.
5. Reuse compatible components and avoid duplicate systems.
6. Build a small set of representative components first and verify the visual direction.
7. Apply the same design rules across all pages.
8. Validate contrast, responsive behavior, interaction states, and motion.
9. Update this document if a meaningful, approved design-system change is made.
10. Report any intentional deviation and its reason.

If the codebase contains conflicting styling, determine whether it is part of a working existing product before replacing it. Preserve functionality and make changes deliberately.

Do not treat this file as permission to rewrite unrelated student projects.

### Decision hierarchy

When design decisions conflict, prioritize:

1. Accessibility, usability, and data integrity.
2. Existing working product constraints and project-owner requirements.
3. This design system.
4. Page-specific needs.
5. Decorative experimentation.

A page-specific variation is acceptable when it improves the experience and still feels recognizably part of Sillico Sapiens.

---

## 25. Final Visual Quality Checklist

Before considering a page complete, confirm:

- [ ] The page clearly belongs to the Sillico Sapiens brand.
- [ ] The white, cyan, and deep-teal palette is applied consistently.
- [ ] Typography has a clear hierarchy.
- [ ] Spacing and alignment are consistent.
- [ ] Circuit-inspired details are restrained and purposeful.
- [ ] Project content is more prominent than decoration.
- [ ] Cards and controls share a coherent visual language.
- [ ] Links and interactive states are obvious.
- [ ] Keyboard focus is visible.
- [ ] Contrast has been checked.
- [ ] Mobile layouts do not overflow.
- [ ] Images have appropriate sizing and alternative text.
- [ ] Reduced-motion preferences are respected.
- [ ] No unsupported project claims or fabricated metadata are displayed.
- [ ] The browser console and production build have been checked.
- [ ] Any remaining limitations are documented.

---

## 26. Final Design Principle

**Sillico Sapiens should look like a thoughtful engineering community: precise in its details, open in its presentation, optimistic about technology, and centered on the people building it.**

Use the reference poster to establish the brand's visual signature. Use this document to keep the website coherent. Use the actual student projects to give the showcase its substance.

The final result should be recognizable as Sillico Sapiens even without a large logo: bright white space, confident deep-teal typography, subtle cyan engineering details, and a clear focus on student-built work.
