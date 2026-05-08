# Repository Copilot Instructions

## Operating Mode

This repository uses a durable artifact workflow.

For non-trivial work, create or update repository artifacts in this sequence:

1. Spec
2. Spec QA
3. Sprint
4. Sprint QA
5. Implementation
6. Implementation QA

Do not skip QA phases.

## Artifact Locations

- `README.md`: entry layer and orientation
- `docs/foundation/`: stable process guidance
- `docs/_specs/`: active workstreams
- `docs/_archive/`: retired or completed workstreams

## Role Separation Rules

- Planning artifacts define intent and boundaries; they do not implement code.
- Implementation changes only execute sprint scope.
- QA artifacts evaluate clarity, scope discipline, and verification evidence.

## Prompting Rules

When producing planning artifacts, include:

- clear objective
- explicit scope and out-of-scope
- acceptance criteria that are testable
- verification steps that can be executed or inspected

When producing QA artifacts, report findings by severity first, then verdict, then follow-ups.

## Scope Discipline

- Prefer small, bounded sprint scopes.
- Avoid unrelated refactors during implementation.
- If a request expands scope, record a follow-on sprint instead of blending concerns.

## Verification Discipline

Always include verification language in artifacts.

Use one or both:

- command-based verification (for example build, lint, tests)
- manual inspection steps tied to concrete files

## Memory Preference

Prefer durable file artifacts over chat-only memory for decisions, constraints, and acceptance language.
