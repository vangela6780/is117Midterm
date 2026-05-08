# Orchestration Workflow

## Purpose

This repository uses a spec-first workflow so implementation decisions remain in files and can be reviewed after the chat ends.

The workflow separates planning, implementation, and QA into explicit artifact passes.

## Artifact Model

- `README.md` is the entry layer.
- `docs/foundation/` stores stable process guidance.
- `docs/_specs/` stores active workstreams.
- `docs/_archive/` stores retired or completed workstreams.
- `.github/copilot-instructions.md` stores repo-level AI operating rules.

## Process Sequence

1. Write or update a governing spec.
2. QA the spec for scope and verification quality.
3. Write one bounded sprint document.
4. QA the sprint document before implementation.
5. Implement only the sprint scope.
6. QA implementation against spec and sprint.

If scope grows during implementation, create a follow-on sprint instead of expanding the current sprint.

## Artifact Roles

### Spec

Defines problem, outcome, boundaries, constraints, acceptance criteria, and verification.

### Spec QA

Critiques the spec for contradictions, vague acceptance language, and missing boundaries.

### Sprint Doc

Translates the spec into one executable unit with clear file zones and verification steps.

### Sprint QA

Checks if the sprint is credible before coding and complete after coding.

### Implementation QA

Confirms completed changes match sprint scope and that verification evidence was captured.

## Archive Rule

Move work from `docs/_specs/<workstream>/` to `docs/_archive/<workstream>/` when the workstream is complete or retired.

## Completion Standard

Work is complete only when all are true:

1. Scope matches the intended artifact.
2. QA has been performed.
3. Verification steps were executed and recorded.