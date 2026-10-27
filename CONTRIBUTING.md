# Contributing — Sillico Sapiens Student Project Showcase

Thank you for contributing to the Sillico Sapiens student project community. This repository is intended to help people discover student-built projects and learn from one another.

These guidelines are a starting point. Follow any current maintainer instructions and repository contribution templates. If an existing workflow conflicts with this document, flag the mismatch for maintainers rather than moving or rewriting student work unilaterally.

## 1. Before contributing

- Read the root `README.md` and this guide.
- Check the current directory structure and any existing submission instructions.
- Look for an existing project folder before creating a new one.
- Open an issue or discuss a substantial change with the maintainers first.
- Never include passwords, API keys, tokens, private configuration, or personal information that should not be public.

## 2. Choose the right contribution

Possible contributions include:

- Submitting a new student project.
- Improving a project's README or documentation.
- Adding or correcting showcase metadata.
- Providing approved screenshots or visual assets.
- Fixing a bug in the showcase.
- Improving accessibility, responsiveness, or performance.
- Improving contribution instructions or tests.

Keep pull requests focused. A project submission should not unexpectedly rewrite unrelated projects.

## 3. Project submission requirements

Each project should include as much of the following as is relevant:

- A clear project name.
- Author or contributor attribution as approved for public display.
- A concise explanation of the problem or idea.
- A description of what the project actually does.
- Key features that have been implemented.
- The real technology stack.
- Setup and run instructions, where applicable.
- Screenshots or a short demonstration, if available.
- A live demo URL, if deployed and verified.
- Source links and relevant credits.
- Clear license information and any third-party asset attributions.

Do not claim that a planned feature is already implemented. Clearly label unfinished work, known limitations, and setup requirements.

## 4. Folder structure

Use the submission location specified by the current repository maintainers.

Before submitting:
1. Inspect the root directory and current README.
2. Follow the existing convention if it is clear and consistent.
3. If instructions refer to a directory that does not exist, ask for clarification or raise the inconsistency.
4. Do not create a second competing project directory or move existing submissions to match an assumed structure.

A project folder should be named clearly and consistently. Do not rename another contributor's folder without maintainer approval.

## 5. Project README template

A project's README can use this structure:

```markdown
# Project Name

A concise, accurate summary of the project.

## Problem / Motivation
What problem or need does this project address?

## Features
- Feature that is actually implemented
- Another implemented feature

## Technology Stack
List only technologies verified in the project.

## Screenshots / Demo
Add genuine screenshots and a verified live demo, if available.

## Setup and Usage
Provide accurate installation and run instructions.

## Known Limitations
Describe unfinished work or known issues.

## Contributors
Credit contributors appropriately.

## License and Attribution
State the applicable license and credit third-party assets where required.
```

Adapt the template to the project's type. Do not force irrelevant sections onto a small project.

## 6. Showcase metadata

If the showcase uses a centralized project dataset:

- Follow the schema documented in `ARCHITECTURE.md` and the existing code.
- Use a unique, stable project ID.
- Keep names, authors, descriptions, and technologies accurate.
- Link to the correct source folder or repository.
- Add a live demo only when the destination is valid and verified.
- Use a genuine screenshot or clearly identified illustrative fallback.
- Do not add fabricated statistics, ratings, awards, or testimonials.
- Keep optional fields optional; do not invent values to fill every field.
- Validate the dataset and test the relevant project views after changes.

## 7. Screenshots and assets

- Use assets you created, own, or have permission to redistribute.
- Follow the asset's license and attribution requirements.
- Do not include private messages, personal information, credentials, or sensitive browser data in screenshots.
- Optimize image size and use consistent dimensions where practical.
- Use descriptive filenames.
- Add meaningful alternative text for informative images.
- Do not represent generated artwork as a screenshot of the working application.

## 8. Licensing and ownership

- Preserve existing license files and notices unless maintainers explicitly approve a change.
- Do not assume that contributing code automatically transfers ownership to the club.
- Confirm that you have the right to submit the code, images, fonts, datasets, and other assets.
- Identify third-party libraries and assets that require attribution.
- Do not add a license to someone else's work without authority.
- Ask maintainers to clarify conflicting or ambiguous license language before submitting work that depends on it.

A repository-level license may not automatically resolve the licensing of every individual contribution. Seek appropriate guidance where ownership or licensing is unclear.

## 9. Suggested pull-request workflow

1. Sync your local copy with the current default branch.
2. Create a branch for your change.
3. Make a focused change.
4. Review the diff for unrelated modifications, secrets, and accidental deletions.
5. Run the checks described in `TESTING.md`.
6. Update documentation when behavior or setup changes.
7. Open a pull request with a clear title and summary.
8. Include screenshots for visual changes where practical.
9. Explain tests performed and known limitations.
10. Respond to maintainer feedback respectfully.

Use the repository's actual branch protections and pull-request templates where configured; do not assume a particular branching strategy if none is documented.

## 10. Pull-request checklist

- [ ] The purpose of the change is clear.
- [ ] Existing projects and attribution are preserved.
- [ ] No secrets or inappropriate personal information are included.
- [ ] New claims and metadata are supported by project evidence.
- [ ] Links and assets are correct and appropriately licensed.
- [ ] Relevant tests and build checks have been run.
- [ ] Documentation is updated where needed.
- [ ] Visual changes follow `design.md`.
- [ ] Mobile layout and keyboard accessibility have been considered.
- [ ] Known limitations are disclosed.

## 11. Code and design expectations

- Follow the established conventions of the affected project.
- Prefer clear, maintainable code over clever shortcuts.
- Reuse components and design tokens.
- Avoid unnecessary dependencies.
- Keep UI accessible and responsive.
- Do not add decorative controls that do not work.
- Do not refactor unrelated student projects without permission.
- Explain significant trade-offs in the pull request.

## 12. Respectful community conduct

Be constructive, patient, and respectful. Review code and project work on its merits. Give feedback about the work rather than making personal judgments about contributors.

If the repository has a separate Code of Conduct, follow that document. Do not claim one exists unless it has been added and approved.

## 13. Questions

For questions about project placement, ownership, licensing, or publication, contact the repository maintainers through the current, verified channel documented in the repository. Do not invent a contact address or social link.
