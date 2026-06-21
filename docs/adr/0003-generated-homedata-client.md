# 0003: HomeData contracts are generated from OpenAPI

Status: Accepted

## Context

Handwritten API clients drift from endpoint paths, query names,
authentication, and response types.

## Decision

`packages/homedata/src/openapi-spec.yaml` is the source of truth. Hey API
generates the fetch client committed under `packages/homedata/src/client`.
Application adapters in `apps/webapp/src/lib/actions.ts` normalise inputs and
translate failures into product-level results.

## Consequences

- Endpoint changes are reviewed in the OpenAPI source.
- Generated files are never edited manually.
- `HOMEDATA_API_KEY` remains server-only.
- Application code is insulated from transport details and postcode formats.
