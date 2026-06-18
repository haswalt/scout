# Scout

Scout is a UK neighbourhood discovery application. Users can search by address
or postcode and navigate to an area profile backed by HomeData.

The repository is a TypeScript monorepo built with Next.js, React, pnpm,
Turborepo, Panda CSS, Vitest, and Testing Library.

## Getting started

Requirements:

- Node.js 24;
- pnpm 11.7.0;
- a HomeData API key.

Install dependencies and create a local environment file:

```sh
pnpm install
printf 'HOMEDATA_API_KEY=your-key\\n' > .env.local
pnpm dev
```

The web application runs at [http://localhost:3000](http://localhost:3000).
Environment files are ignored and must not be committed.

## Common commands

| Command                   | Purpose                                         |
| ------------------------- | ----------------------------------------------- |
| `pnpm dev`                | Run development tasks                           |
| `pnpm build`              | Build the workspace                             |
| `pnpm lint`               | Run ESLint                                      |
| `pnpm check-types`        | Run TypeScript checks                           |
| `pnpm test`               | Run package tests in watch mode where supported |
| `pnpm test:ci`            | Run UI tests once with enforced coverage        |
| `pnpm test:e2e`           | Run the current E2E placeholder                 |
| `pnpm codegen`            | Regenerate API and styling outputs              |
| `pnpm generate:component` | Generate a UI component scaffold                |

## Repository structure

| Path                         | Responsibility                                   |
| ---------------------------- | ------------------------------------------------ |
| `apps/webapp`                | Next.js product application                      |
| `packages/ui`                | Shared accessible UI components and Panda output |
| `packages/scout-preset`      | Design tokens and global styling                 |
| `packages/homedata`          | Generated HomeData API client                    |
| `packages/eslint-config`     | Shared lint configuration                        |
| `packages/typescript-config` | Shared TypeScript configuration                  |

## Engineering documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Adding features](docs/FEATURE_DEVELOPMENT.md)
- [Code generation](docs/CODE_GENERATION.md)
- [Testing](docs/TESTING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [AI-assisted development](docs/AI-USAGE.md)

## CI and deployment

GitHub Actions runs linting, type checks, unit tests with coverage, the workspace
build, and an explicit E2E placeholder. Pull requests from repository branches
deploy to Vercel Preview, pushes to `develop` deploy to Staging, and `v*` tags
deploy to Production. Successful tag deployments create a GitHub Release and
generated changelog.

See [deployment documentation](docs/DEPLOYMENT.md) for Vercel project settings,
required GitHub secrets, release tagging, and environment setup. See
[CHANGELOG.md](CHANGELOG.md) for the changelog policy.

## Accessibility

Shared UI components use native semantics, accessible names, keyboard behavior,
disabled states, and decorative icon treatment. Accessibility behavior is
covered by colocated unit tests. Automated browser-level accessibility checks
should be added with the future E2E suite.
