# 0004: Tests are split by ownership and risk

Status: Accepted

## Context

Primitive tests alone do not prove application adapters or user journeys, while
browser tests are too slow and broad for every branch.

## Decision

- `packages/ui` uses colocated Vitest and Testing Library tests with full
  coverage.
- `apps/webapp` uses Vitest for domain helpers, HomeData adapters, and
  app-owned presentation.
- `apps/webapp-e2e` uses Playwright for critical navigation, keyboard
  interaction, and axe accessibility scans.

## Consequences

- Failures are caught at the cheapest useful layer.
- External API details are tested in adapters, not duplicated in component
  tests.
- Browser tests remain few, deterministic, and focused on user-visible
  contracts.
- CI stores traces and screenshots for failed browser runs.
