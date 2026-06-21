# 0001: Product modules own loading boundaries

Status: Accepted

## Context

The postcode page combines location, area-profile, and property data with
different response times. A route-level loading screen would delay useful
content until every request completed.

## Decision

Each module in `apps/webapp/src/modules` exposes one entry component and owns
its React Suspense boundary, skeleton, data request, empty state, and rendered
content.

## Consequences

- Modules stream independently and can reveal useful content progressively.
- Loading and empty states stay close to the data contract they represent.
- The route composes modules without knowing their internal request sequence.
- Shared packages remain lower-level dependencies and do not import modules.
