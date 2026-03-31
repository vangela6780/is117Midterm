# Thread & Trace: The Upcycling Revolution

Thread & Trace is a story-led digital museum experience built for IS117. It combines a project-specific Next.js site with a durable repository workflow for Spec -> Sprint -> QA delivery.

## What This Repository Is

This repository has two layers:

1. A Bauhaus-inspired museum page that guides visitors from problem framing to creative action.
2. A process model that keeps major decisions in files, not only in chat history.

## Current State

The repository currently includes:

- a project-specific App Router site shell
- componentized exhibition rooms and supporting narrative cards
- shared site configuration for metadata and editorial framing
- GitHub Pages deployment through GitHub Actions
- active planning artifacts for spec, sprint, and QA

## Start Here

If you are new to the repository, read these in order:

1. [docs/foundation/orchestration-workflow.md](docs/foundation/orchestration-workflow.md)
2. [docs/foundation/prompting-playbook.md](docs/foundation/prompting-playbook.md)
3. [docs/_specs/README.md](docs/_specs/README.md)
4. [docs/_specs/thread-trace-foundation/spec.md](docs/_specs/thread-trace-foundation/spec.md)

## Museum Narrative Route

1. Entry room: The Atacama Graveyard.
2. Cost room: Water footprint interpretation.
3. Gallery room: Clothing as history with provenance.
4. Community room: Social proof through pledges and statements.
5. Workshop room: Action-oriented upcycling guidance.

## Design Framework

- Design style: Bauhaus.
- Persuasion principle: Social Proof.
- Brand archetype: The Creator.

Detailed design rules are in [docs/design-system.md](docs/design-system.md).

## Process Model

For substantial work, use:

1. Write or update the governing spec.
2. QA the spec.
3. Write one sprint doc.
4. QA the sprint doc.
5. Implement the sprint.
6. QA implementation against scope and verification steps.

This sequence is documented in [docs/foundation/orchestration-workflow.md](docs/foundation/orchestration-workflow.md).

## Repository Structure

```text
.
├── .github/
│   └── workflows/
├── app/
├── components/
│   └── site/
├── data/
├── docs/
│   ├── foundation/
│   └── _specs/
├── lib/
├── next.config.mjs
├── package.json
└── tailwind.config.ts
```

## Development

Install dependencies:

```bash
npm install
```

Run local development:

```bash
npm run dev
```

Build for production export:

```bash
npm run build
```

## Deployment

GitHub Pages deployment is configured via:

- [next.config.mjs](next.config.mjs)
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

Deployment target:

- https://vangela6780.github.io/is117Midterm/

## Active Workstream

- [docs/_specs/thread-trace-foundation/spec.md](docs/_specs/thread-trace-foundation/spec.md)
- [docs/_specs/thread-trace-foundation/spec-qa.md](docs/_specs/thread-trace-foundation/spec-qa.md)
- [docs/_specs/thread-trace-foundation/sprints/sprint-1-shell-and-process.md](docs/_specs/thread-trace-foundation/sprints/sprint-1-shell-and-process.md)
- [docs/_specs/thread-trace-foundation/sprints/sprint-1-shell-and-process-qa.md](docs/_specs/thread-trace-foundation/sprints/sprint-1-shell-and-process-qa.md)