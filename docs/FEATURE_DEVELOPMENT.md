# Adding features

This guide explains where new code belongs and how to extend Scout without
breaking the existing package boundaries.

## Project structure

Only handwritten source and important configuration are shown below. Generated
directories such as `.next`, `styled-system`, and
`packages/homedata/src/client` are omitted.

```text
.
├── apps/
│   └── webapp/
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   └── [postcode]/page.tsx
│       │   ├── components/
│       │   │   └── header.tsx
│       │   ├── config/
│       │   │   └── constants.ts
│       │   └── lib/
│       │       └── actions.ts
│       ├── next.config.ts
│       └── panda.config.ts
├── packages/
│   ├── homedata/
│   │   ├── src/
│   │   │   ├── openapi-spec.yaml
│   │   │   ├── config.ts
│   │   │   └── client/          # generated
│   │   └── openapi-ts.config.ts
│   ├── scout-preset/
│   │   └── src/index.ts
│   ├── ui/
│   │   └── src/
│   │       └── component-name/
│   │           ├── index.tsx
│   │           ├── index.test.tsx
│   │           ├── styles.ts
│   │           └── types.ts
│   ├── eslint-config/
│   └── typescript-config/
├── turbo/
│   └── generators/
│       └── templates/component/
└── docs/
```

## Where code belongs

Use the narrowest appropriate location. Do not move product-specific behavior
into a shared package simply because it might be reused later.

| Change                                                        | Location                                                 |
| ------------------------------------------------------------- | -------------------------------------------------------- |
| New page or route segment                                     | `apps/webapp/src/app`                                    |
| Route-specific layout or loading/error UI                     | The relevant App Router segment                          |
| Product component reused across webapp routes                 | `apps/webapp/src/components`                             |
| Static product configuration or suggestion lists              | `apps/webapp/src/config`                                 |
| Server actions, data orchestration, or app adapters           | `apps/webapp/src/lib`                                    |
| Reusable visual or interaction primitive                      | `packages/ui/src/<component>`                            |
| Shared color, spacing, typography, shadow, or animation token | `packages/scout-preset/src/index.ts`                     |
| HomeData endpoint or schema                                   | `packages/homedata/src/openapi-spec.yaml`                |
| HomeData authentication/runtime client behavior               | `packages/homedata/src/config.ts`                        |
| Shared lint or TypeScript policy                              | `packages/eslint-config` or `packages/typescript-config` |

### App component or shared UI component?

Keep a component in `apps/webapp` when it knows about Scout routes, HomeData
response shapes, form orchestration, product copy, or a specific page layout.

Move it to `packages/ui` only when its API can be expressed as reusable visual
props and native HTML behavior. Shared components must not import from
`apps/webapp`, call product APIs, or perform product navigation.

For example:

- `Header` remains in `apps/webapp/src/components` because it composes product
  branding and search behavior.
- `Search`, `Button`, and `Typography` belong in `packages/ui` because they are
  reusable presentation and interaction primitives.

## Feature implementation workflow

### 1. Define the route and data boundary

Identify the route that owns the feature and whether it requires external data.
App Router pages and layouts are server components unless they need client-only
state or browser APIs.

Add `"use client"` at the smallest practical boundary. Client components should
own interactions such as `react-hook-form`, event handlers, and navigation.
Keep API credentials and direct HomeData calls in server-side code.

### 2. Add or update the data contract

If an existing generated HomeData function already exposes the required data,
call it from a server action or server-side helper in `apps/webapp/src/lib`.

For a new or changed endpoint:

1. update `packages/homedata/src/openapi-spec.yaml`;
2. update `packages/homedata/src/config.ts` only if runtime client behavior
   changes;
3. run `pnpm --filter @repo/homedata codegen`;
4. consume the generated function through `@repo/homedata`;
5. review, but do not manually edit, `packages/homedata/src/client`.

Keep error handling and fallback behavior explicit in the app adapter. Avoid
passing raw transport errors or credentials into client components.

See [Code generation](CODE_GENERATION.md) for full regeneration instructions.

### 3. Build the product composition

Place route content in its App Router segment and extract webapp-only components
into `apps/webapp/src/components` when the page becomes difficult to scan or the
same composition is used by multiple routes.

Use:

- `@/components/*` for webapp components;
- `@/config/*` for static app configuration;
- `@/lib/*` for app services and server actions;
- `@repo/ui/<component>` for shared UI primitives;
- `@repo/ui/jsx` for generated Panda layout primitives;
- `@repo/homedata` for generated API functions and types.

Avoid deep relative imports across these boundaries.

### 4. Extend the design system deliberately

First compose existing UI components and semantic tokens. If the feature needs a
new reusable primitive, run:

```sh
pnpm generate:component
```

If it needs a new shared visual value, add a semantic token to
`packages/scout-preset/src/index.ts` instead of scattering raw values through
components. Regenerate Panda output after changing tokens, recipes, or detected
style usage:

```sh
pnpm --filter @repo/ui build
```

See [Code generation](CODE_GENERATION.md) for the component scaffold structure
and completion checklist.

### 5. Add tests at the owning layer

For `packages/ui`, colocate tests as `index.test.tsx`. Cover native semantics,
accessible names, keyboard and pointer behavior, disabled states, prop
forwarding, and meaningful recipe variants. The package enforces 100% coverage.

For application features, test product behavior at the closest useful boundary.
Pure helpers should have unit tests, route/component behavior should have
integration tests when an app test harness is introduced, and critical user
journeys should be added to the future E2E suite.

Do not duplicate generated-client tests. Test the handwritten OpenAPI contract,
app adapter behavior, and user-visible result instead.

See [Testing](TESTING.md) for commands and expectations.

### 6. Document and validate

Update documentation when the change adds a route, environment variable,
external dependency, reusable component, generation step, or deployment
requirement.

Before opening a pull request, run:

```sh
pnpm lint
pnpm check-types
pnpm test:ci
pnpm build
```

If generated inputs changed, regenerate and include the expected generated
diff. If the feature changes an important browser journey, note the missing E2E
coverage until the E2E runner is implemented.

## Example: adding an area statistic

A statistic shown only on the postcode results page would normally be split as:

```text
packages/homedata/src/openapi-spec.yaml
  Add or update the response schema if the field is not already available.

apps/webapp/src/lib/actions.ts
  Fetch and normalize the generated API response.

apps/webapp/src/components/area-stat.tsx
  Compose product copy and shared UI primitives.

apps/webapp/src/app/[postcode]/page.tsx
  Place the statistic in the route layout.
```

If the visual treatment becomes a generic statistic primitive with no knowledge
of postcodes or HomeData, generate a component such as `stat` in `packages/ui`
and keep `area-stat.tsx` as the product-specific adapter.

## Feature checklist

- The code is in the narrowest owning package.
- Server-only data and secrets stay outside client components.
- Generated files were changed through their source inputs.
- Existing tokens and components were reused before adding new ones.
- Native semantics and keyboard behavior are preserved.
- Tests cover behavior rather than implementation details.
- New setup, environment, architecture, or generation requirements are
  documented.
- Lint, type checks, tests, and build pass locally.
