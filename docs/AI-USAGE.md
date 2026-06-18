# AI-assisted development

AI tools have been used in this repository as engineering accelerators. Their
output is treated as a draft that requires review and verification.

## Current uses

- Unit tests: AI assisted with test-case generation, accessibility scenarios,
  and coverage-gap analysis for `packages/ui`.
- Documentation: AI assisted with the README, architecture, testing,
  deployment, and component API documentation.
- UI design: Claude Design was used to explore and develop the visual direction
  for the Scout interface. The implemented system is encoded in
  `@repo/scout-preset` and the component recipes in `@repo/ui`.
- Code review: GitHub Copilot may perform automated reviews on pull requests to
  identify possible defects, missing tests, accessibility issues, security
  concerns, and documentation drift before human approval.

## Automated code reviews with GitHub Copilot

Repository maintainers can enable automatic GitHub Copilot code review for pull
requests in GitHub repository or organization settings. Availability and the
exact configuration controls depend on the repository's GitHub Copilot plan.

Configure reviews to run when a pull request is opened and when new commits are
pushed. Copilot should review the complete change, including tests,
documentation, generated-input files, and workflow changes. Generated output
such as `packages/homedata/src/client` and Panda `styled-system` directories
should generally be ignored in favor of reviewing their source specifications,
configuration, and templates.

Copilot review comments are advisory. They do not count as required human
approval and must not be used as the only merge gate.

### Review focus

Automated reviews should prioritize:

- correctness, edge cases, and error handling;
- server/client boundaries and accidental secret exposure;
- accessibility semantics, keyboard behavior, and focus management;
- tests that assert user-observable behavior;
- misuse of generated code or edits to generated output;
- consistency with the package boundaries in
  [Adding features](FEATURE_DEVELOPMENT.md);
- deployment, environment, and release workflow safety;
- documentation that no longer matches implementation.

Style-only feedback already enforced by ESLint or Prettier should not block a
review unless it exposes a maintainability problem.

### Handling Copilot findings

For each actionable comment:

1. verify the finding against the code and requirements;
2. fix it and add or update a regression test when appropriate;
3. reply with the rationale when the suggestion is not applicable;
4. resolve the conversation only after a human has checked the outcome.

Treat uncertain security, privacy, authentication, data-loss, and production
deployment findings as escalation points for human review. Never accept a
suggested patch without understanding its behavior.

Copilot can miss defects and can produce false positives. Passing Copilot review
does not replace CI, manual testing, dedicated security controls, accessibility
review, or maintainer approval.

## Review requirements

AI-generated changes must meet the same standard as manually authored changes:

- a maintainer reviews behavior, security, accessibility, and maintainability;
- tests, type checks, lint, and builds must pass;
- generated assertions must test user-observable behavior rather than merely
  execute lines;
- design output must be checked for responsive behavior, contrast, semantics,
  and consistency with existing tokens;
- documentation must be checked against the current code and deployment
  configuration.
- automated review findings must be evaluated by a human rather than accepted
  mechanically.

## Data and security

Do not provide AI tools with production secrets, access tokens, personal data,
private API responses, or licensed material that cannot be shared. Use
redacted examples or synthetic fixtures.

AI assistance does not replace authorship accountability. The person approving
and merging a change remains responsible for its correctness.
