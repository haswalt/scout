# Testing

Scout uses layered checks so failures are caught at the cheapest useful level.

## Local commands

Run the same checks used by CI from the repository root:

```sh
pnpm lint
pnpm check-types
pnpm test:ci
pnpm build
```

During development, `pnpm test` starts package test runners through Turborepo.
The CI command runs UI and webapp tests once.

## Unit and accessibility tests

UI tests live next to components under `packages/ui/src/*/index.test.tsx` and
use Vitest, Testing Library, `user-event`, and jest-dom.

Tests should cover:

- visible behavior and prop forwarding;
- semantic roles and accessible names;
- keyboard and pointer interaction;
- focusable and disabled states;
- decorative icon treatment;
- recipe variants that affect rendered output.

The UI package enforces 100% statements, branches, functions, and lines. This is
a regression guard, not a substitute for meaningful assertions. Prefer queries
by role, label, or text over implementation-specific selectors.

Run only UI tests:

```sh
pnpm --filter @repo/ui test -- --run
pnpm --filter @repo/ui coverage -- --run
```

## Application tests

Application tests live beside app-owned code in `apps/webapp/src`. They cover
postcode formatting, HomeData adapters, domain-to-visual mappings, and
application presentation such as empty states.

Run only webapp tests:

```sh
pnpm --filter webapp test -- --run
```

## End-to-end tests

Playwright tests live in `apps/webapp-e2e`. They cover the highest-value browser
contracts: keyboard search, curated-location navigation, results-page
rendering, and axe accessibility scans.

```sh
pnpm test:e2e
```

Playwright starts a local HomeData fixture server on port 3200 and the webapp on
port 3100. The suite never requires a live API key or third-party data. CI
installs Chromium and uploads the HTML report, traces, and screenshots when a
run fails.

Stop any existing `next dev` process for `apps/webapp` before running the suite;
Next.js permits only one development server per build directory.
