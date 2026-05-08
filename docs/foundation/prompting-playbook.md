# Prompting Playbook

## Prompt Structure

Strong prompts in this repository should explicitly state:

1. Role
2. Objective
3. Artifact
4. Scope
5. Invariants
6. Acceptance criteria
7. Verification

Prefer durable artifacts in files over chat-only decisions.

## High-Value Rules

- Separate planning, implementation, and QA into different passes.
- Keep acceptance criteria testable and concrete.
- Preserve the museum narrative spine on every page update.
- Avoid unrelated refactors while implementing sprint scope.

## Reusable Prompt Patterns

### Planning Prompt Skeleton

Use when creating or updating specs and sprints:

1. Role: planning author for repository artifacts.
2. Objective: define bounded scope and intended outcome.
3. Artifact target: exact file path and artifact type.
4. Scope boundaries: in-scope and out-of-scope bullets.
5. Acceptance criteria: checkable bullets.
6. Verification: explicit commands or inspection steps.

### QA Prompt Skeleton

Use when reviewing specs, sprints, or implementation:

1. Role: QA reviewer.
2. Artifact under review: exact file path.
3. Findings format: High -> Medium -> Low.
4. Verdict options: approved, approved with follow-ups, changes required.
5. Follow-ups: bounded next actions.

## Review Framing

When requesting QA, ask for findings first:

- identify risks
- flag contradictions
- point out missing verification
- recommend bounded follow-ups

When possible, include file paths and concrete verification evidence in findings.