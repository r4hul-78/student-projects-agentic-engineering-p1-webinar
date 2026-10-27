# Testing and Quality Assurance — Sillico Sapiens Showcase

## 1. Purpose

This document defines the minimum checks for changes to the showcase. Use the actual scripts and tooling present in the repository; the commands below are examples until confirmed by inspection.

Never report a check as passed unless it was actually run and its result observed.

## 2. Before testing

- Read `AGENTS.md`, `ARCHITECTURE.md`, and the relevant project README.
- Inspect the current Git diff and preserve unrelated changes.
- Identify the app directory, package manager, available scripts, and existing test setup.
- Use the package manager indicated by the lockfile.
- Avoid installing new tools if an existing equivalent is available.

## 3. Build and static checks

Run applicable checks from the correct application directory. Common examples include:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

These commands are illustrative. Check `package.json` and project documentation first; do not run commands that do not exist or assume that every project uses npm.

Record:
- The command executed.
- Whether it succeeded.
- Relevant errors or warnings.
- Any checks skipped and why.

Fix issues introduced by the change. Do not conceal pre-existing failures; identify them separately.

## 4. Core functional tests

### Navigation
- Every primary navigation link leads to a real page or section.
- Direct navigation to important routes works.
- Browser refresh works on nested routes in the chosen deployment setup.
- The not-found view provides a useful way back.
- Mobile navigation opens, closes, and remains keyboard accessible.

### Project dataset
- Every record has a unique, stable ID.
- Required fields are present and valid.
- Optional missing fields do not crash rendering.
- Project names, author attribution, descriptions, and technologies match source evidence.
- Source links lead to the correct project.
- Live demo actions appear only for verified destinations.
- Images load or show an appropriate fallback.

### Search
- Search matches supported fields.
- Matching is not unexpectedly case-sensitive.
- Empty and whitespace-only queries behave sensibly.
- Clearing search restores the expected results.
- No-match results display a useful empty state.

### Filters and sorting
- Category filters work on actual data.
- Technology filters work on actual data.
- Multiple filters combine according to the documented behavior.
- Sorting is deterministic.
- Reset clears all active search and filter state.
- The displayed result count matches the results.
- Controls remain usable on mobile and with a keyboard.

### Project details
- Each project opens the correct detail view.
- Detail content matches verified source information.
- Missing descriptions, images, or URLs are handled gracefully.
- External links use safe behavior when opened in a new tab.
- No secret or inappropriate personal data is displayed.

### Contributors
- Contributor details are supported by approved, verified information.
- Project counts are derived from the dataset.
- Public profile links are valid and appropriate.
- No fake profiles or biographies appear.

## 5. Responsive checks

Inspect at minimum:
- Narrow mobile viewport around 320–375 CSS pixels.
- Typical mobile viewport around 390–430 CSS pixels.
- Tablet viewport around 768 CSS pixels.
- Desktop viewport around 1280 CSS pixels or wider.

Verify:
- No horizontal overflow.
- Navigation remains usable.
- Project cards reflow appropriately.
- Text does not clip or become too small.
- Buttons and form controls have comfortable touch targets.
- Images preserve their intended aspect ratios.
- Dialogs and menus fit within the viewport.
- Long project names and technology tags wrap safely.
- The interface remains usable in portrait and landscape orientations where practical.

These are suggested test widths, not an exhaustive device-compatibility guarantee.

## 6. Accessibility checks

- Navigate using only the keyboard.
- Verify visible focus indicators.
- Check heading hierarchy and semantic landmarks.
- Verify accessible names for icon-only buttons and inputs.
- Check meaningful images for suitable alternative text.
- Check text and interface contrast.
- Verify that status is not conveyed by color alone.
- Test menus, dialogs, and filters with keyboard interaction.
- Confirm reduced-motion preferences are respected.
- Check usability at 200% zoom and for narrow reflow.
- Use an automated accessibility checker if available, followed by manual review.

An automated scan alone does not establish WCAG conformance.

## 7. Visual and design-system checks

Use `design.md` as the visual reference.

- Brand palette and typography are consistent.
- Spacing and alignment are coherent.
- Circuitry and technical decoration are restrained.
- Project content is more prominent than decoration.
- Cards, buttons, tags, and form fields share consistent styling.
- Hover, active, focus, disabled, and error states are defined where needed.
- No placeholder controls or fake links are present.
- Light and dark themes are both checked if both are implemented.
- No major layout shifts or visual overflow occur.

Capture screenshots for meaningful visual changes when the environment supports it.

## 8. Browser and link checks

- Check the browser console for errors.
- Inspect failed asset requests.
- Verify internal routes.
- Verify external links where possible.
- Distinguish a broken destination from a destination that could not be tested due to access restrictions.
- Do not claim every external link is valid if only a sample was checked.

## 9. Data and repository integrity

Before marking a change complete:
- Review the Git diff.
- Confirm no existing student folder was deleted or unintentionally changed.
- Check for accidentally committed build output, local environment files, credentials, or private data.
- Confirm license files and attribution notices remain intact.
- Confirm documentation matches the implemented behavior.
- Check that the showcase and student projects still use their intended independent configurations.

## 10. Release checklist

- [ ] Production build succeeds.
- [ ] Relevant lint and type checks pass, where configured.
- [ ] Automated tests pass, where configured.
- [ ] Search and filters are tested.
- [ ] Main routes and project details are tested.
- [ ] Responsive layouts are checked.
- [ ] Keyboard and basic accessibility checks are completed.
- [ ] Browser console is reviewed.
- [ ] Important links and assets are verified.
- [ ] Existing student work remains intact.
- [ ] No secrets or inappropriate personal information are exposed.
- [ ] Documentation is accurate.
- [ ] Deployment is verified if a deployment was authorized and performed.
- [ ] Remaining limitations are documented.

## 11. Test report template

Use this in a pull request or final implementation report:

```text
Build:
Command:
Result:

Lint / type checks:
Commands:
Results:

Automated tests:
Command:
Result:

Manual checks:
- Search:
- Filters and sorting:
- Navigation and details:
- Responsive layout:
- Keyboard/accessibility:
- Links/assets:
- Repository integrity:

Known issues:
Skipped checks and reasons:
Deployment status:
```
