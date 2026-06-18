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
The CI command runs the UI package once with coverage enabled.

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

## End-to-end tests

E2E coverage is intentionally a placeholder. `pnpm test:e2e` currently reports
that no E2E runner is configured, and CI exposes a clearly named placeholder
job.

When E2E tests are added:

1. choose and install the browser runner;
2. replace the root `test:e2e` script with the real command;
3. start or target a preview deployment in CI;
4. store screenshots, traces, and reports as workflow artifacts;
5. remove “placeholder” from the workflow job name.

Initial journeys should cover postcode search, suggestion selection, navigation
to an area page, keyboard-only operation, and an automated accessibility scan.
