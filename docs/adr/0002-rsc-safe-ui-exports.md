# 0002: Client components use direct module exports

Status: Accepted

## Context

Some Panda CSS helpers use React context and therefore create Client
Components. Grouping those components inside an exported object obscures their
individual client references across the React Server Component boundary.

## Decision

Client components are exported directly from their module:

```ts
export const Card = withProvider("div", "root");
export const CardBody = withContext("div", "body");
```

Server Components pass rendered React nodes, not component functions, across
client boundaries where possible.

## Consequences

- RSC boundaries remain explicit and serialisable.
- Consumers can import only the primitives they use.
- Compound naming remains available through prefixed exports.
- Context-backed primitives still hydrate, even when server-rendered.
