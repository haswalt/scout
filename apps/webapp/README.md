# Scout web application

This package contains Scout's Next.js App Router application.

Run it from the repository root:

```sh
pnpm install
pnpm dev
```

Product routes, forms, and composition belong in this package. Reusable visual
primitives belong in `packages/ui`, design tokens in `packages/scout-preset`,
and HomeData API bindings in `packages/homedata`.

See the root [README](../../README.md) and
[architecture documentation](../../docs/ARCHITECTURE.md) for full setup and
design boundaries. Use the
[feature development guide](../../docs/FEATURE_DEVELOPMENT.md) when deciding
where a new route, product component, API adapter, shared UI primitive, or token
belongs.
