# Architecture

Scout is a pnpm and Turborepo monorepo for a UK neighbourhood discovery
application.

## Workspace map

```text
apps/webapp
  Next.js App Router application, product modules, and product-specific UI

packages/ui
  Shared React components and generated Panda CSS utilities

packages/scout-preset
  Scout design tokens, semantic tokens, recipes, and global styles

packages/homedata
  Generated typed client for the HomeData API

packages/eslint-config
  Shared ESLint configuration

packages/typescript-config
  Shared TypeScript configuration
```

## Request and dependency flow

```text
Browser
  -> Next.js routes and client components in apps/webapp
  -> server-side action in apps/webapp/src/lib/actions.ts
  -> generated @repo/homedata client
  -> HomeData API

apps/webapp
  -> @repo/ui components
  -> generated Panda CSS runtime
  -> @repo/scout-preset design tokens
```

`apps/webapp` owns routing, forms, navigation, and product composition.
Modules under `apps/webapp/src/modules` own a self-contained product
capability, including data loading, Suspense, skeletons, empty states, and UI.
`packages/ui` owns reusable presentation and interaction primitives.
`packages/homedata` owns the external API contract and authentication setup.

For concrete placement rules and the end-to-end implementation sequence, see
[Adding features](FEATURE_DEVELOPMENT.md).

## UI architecture

Panda CSS generates typed utilities into `packages/ui/styled-system`. Generated
files are build artifacts and are not hand-edited. Components use recipes in
their local `styles.ts` files and expose recipe variants through typed props.

Shared components should:

- preserve native HTML semantics and prop forwarding;
- provide safe accessibility defaults;
- keep product-specific data and navigation outside `packages/ui`;
- use semantic tokens from `@repo/scout-preset`;
- colocate tests with component implementation.

## Data boundaries

`HOMEDATA_API_KEY` is server-only configuration. It must be stored in local
environment files, GitHub Actions secrets, and Vercel environment variables.
It must never be exposed through a `NEXT_PUBLIC_` variable or committed.

The HomeData client is generated from
`packages/homedata/src/openapi-spec.yaml`. Update the specification or generator
configuration and run `pnpm codegen`; do not manually maintain generated client
files. `packages/homedata/src/client` is committed for consumers but excluded
from linting and formatting. Reviews should treat it as generated output and
focus on the OpenAPI specification, generator configuration, and handwritten
adapter code.

See [Code generation](CODE_GENERATION.md) for regeneration commands, generated
file ownership, and the UI component scaffold workflow.

Architecture decisions and their trade-offs are recorded in
[docs/adr](adr/README.md).

## Build orchestration

Turborepo runs package tasks and respects package dependencies. Building the
web application first generates the UI package's Panda output, then runs the
Next.js production build. CI uses frozen pnpm installs so the lockfile is the
authoritative dependency graph.
