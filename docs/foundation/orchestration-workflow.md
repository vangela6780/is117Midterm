# Orchestration Workflow

## Purpose

This repository uses a spec-first workflow so implementation decisions remain in files and can be reviewed after the chat ends.

## Process Sequence

1. Write or update a governing spec.
2. QA the spec for scope and verification quality.
3. Write one bounded sprint document.
4. QA the sprint document before implementation.
5. Implement only the sprint scope.
6. QA implementation against spec and sprint.

## Artifact Roles

### Spec

Defines problem, outcome, boundaries, constraints, acceptance criteria, and verification.

### Spec QA

Critiques the spec for contradictions, vague acceptance language, and missing boundaries.

### Sprint Doc

Translates the spec into one executable unit with clear file zones and verification steps.

### Sprint QA

Checks if the sprint is credible before coding and complete after coding.

## Completion Standard

Work is complete only when all are true:

1. Scope matches the intended artifact.
2. QA has been performed.
3. Verification steps were executed and recorded.