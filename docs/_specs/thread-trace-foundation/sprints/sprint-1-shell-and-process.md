# Thread & Trace Foundation Sprint 1: Shell and Process Baseline

## Status

Implemented

## Goal

Refactor homepage orchestration into a shell pattern and establish process artifacts that mirror a disciplined spec-driven workflow.

## Governing Spec

- [../spec.md](../spec.md)

## Scope

### In Scope

- add shared site config
- create homepage shell component
- update root page to delegate to shell
- add foundation and active spec docs

### Out Of Scope

- additional route development
- deep testing stack setup
- major visual redesign

## Files Or Artifact Zones

- app/page.tsx
- app/layout.tsx
- components/site/
- lib/
- docs/foundation/
- docs/_specs/

## Tasks

1. Create shared site config in lib.
2. Implement a site shell component that orchestrates existing room components.
3. Delegate homepage rendering to the shell.
4. Add foundation workflow docs and active spec templates.

## Acceptance Mapping

- shell-based architecture exists -> satisfied by components/site/home-shell.tsx and app/page.tsx
- shared metadata config exists -> satisfied by lib/site.ts and app/layout.tsx
- process artifacts exist -> satisfied by docs/foundation and docs/_specs

## Verification

- inspect shell delegation in app/page.tsx
- inspect metadata in app/layout.tsx
- inspect docs structure in docs/_specs
- run npm run build