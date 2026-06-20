# Deployment guide

Scout uses GitHub Actions and Vercel for two deployment environments:

```text
Pull request -> Preview
Merge/push to develop -> Preview
Version tag -> Production -> GitHub Release
```

The implementation is in `.github/workflows/ci.yml`. Every deployment waits for
the same quality gate:

- lint and TypeScript checks;
- unit tests with enforced coverage;
- a full workspace build;
- the E2E placeholder job.

The E2E job must be replaced with real browser tests before the workflow is
treated as a complete release gate.

## Deployment matrix

| Git event                 | Vercel target | GitHub environment | Result                                   |
| ------------------------- | ------------- | ------------------ | ---------------------------------------- |
| Pull request to `develop` | `preview`     | `preview`          | Isolated review deployment               |
| Push to `develop`         | `preview`     | `preview`          | Preview deployment of integrated changes |
| Tag matching `v*`         | `production`  | `production`       | Production deployment and GitHub Release |
| Manual workflow run       | `preview`     | `preview`          | Manually requested preview               |

Pull requests from forks run quality checks but do not deploy because GitHub
does not expose repository secrets to untrusted fork workflows.

## Pull request previews

Open or update a pull request targeting `develop`. After the quality jobs pass,
the workflow builds against Vercel's Preview environment and publishes a unique
deployment URL.

Use the preview to verify:

- the acceptance criteria and affected user journey;
- responsive layout at supported viewport sizes;
- keyboard navigation, focus order, and accessible names;
- loading, empty, error, and disabled states;
- API behavior using Preview environment configuration;
- that no secrets or internal error details appear in the browser.

Push additional commits to update the preview. The workflow concurrency policy
cancels obsolete runs for the same branch so reviewers should use the URL from
the latest successful run.

A preview is not production approval. It may use different data, credentials,
domains, caching, and protection settings.

## Preview from `develop`

Merging a pull request, or otherwise pushing to `develop`, deploys the resulting
commit to Vercel's Preview environment. This is the shared integration
deployment for the latest `develop` commit. Use it to verify:

- the merged result rather than an individual pull request branch;
- environment-specific API credentials and runtime configuration;
- interactions between recently merged features;
- migrations or external-service changes before release;
- release-candidate smoke tests.

Do not point production domains at Preview. Preview configuration should be
close enough to Production to exercise integrations without reusing production
secrets or data. If the `develop` preview fails, fix forward through a reviewed
pull request or revert the offending change. Do not create a production tag
from a commit that has not passed Preview verification.

## Production releases

Production deployments are tag-driven. A merge to `develop` does not deploy to
Production.

### Prepare a release

1. Confirm `develop` is green in GitHub Actions.
2. Verify the current `develop` deployment in Preview.
3. Confirm release-facing pull requests have appropriate changelog labels.
4. Choose the next semantic version:
   - patch (`v1.2.3`) for compatible fixes;
   - minor (`v1.3.0`) for compatible features;
   - major (`v2.0.0`) for breaking changes.
5. Create an annotated tag on the verified commit:

```sh
git switch develop
git pull --ff-only
git tag -a v1.2.3 -m "v1.2.3"
git push origin v1.2.3
```

### Release automation

For a `v*` tag, the workflow:

1. checks out the exact tagged commit;
2. runs lint, type checks, unit coverage, build, and the E2E placeholder;
3. pulls Vercel Production settings;
4. builds and deploys to the `production` target;
5. creates a GitHub Release only after deployment succeeds;
6. generates release notes from merged pull requests.

`.github/release.yml` groups release notes using these labels:

| Labels                   | Changelog section |
| ------------------------ | ----------------- |
| `breaking`               | Breaking changes  |
| `feature`, `enhancement` | Features          |
| `fix`, `bug`             | Fixes             |
| `documentation`          | Documentation     |
| `skip-changelog`         | Excluded          |

GitHub Releases are the canonical versioned changelog. `CHANGELOG.md` documents
that policy rather than duplicating generated release notes.

Tags are immutable release identifiers. Never move, delete, or reuse a published
version tag. Correct a bad release with a new patch version.

## Vercel build flow

The workflow follows Vercel's prebuilt deployment flow:

1. `vercel pull --environment=<target>` downloads project settings and
   environment variables.
2. `vercel build --target=<target>` creates `.vercel/output`.
3. `vercel deploy --prebuilt --target=<target>` uploads that exact build.

Building before deployment ensures Vercel receives the same artifact that
passed the workflow rather than rebuilding source separately.

## Initial setup

Create or link a Vercel project with its Root Directory set to `apps/webapp`.
Configure `HOMEDATA_API_KEY` in Preview and Production.

Set the Framework Preset to **Next.js** and leave Output Directory empty so
Vercel uses the framework output automatically. The workflow runs Vercel CLI
commands from the repository root; Vercel then applies the configured
`apps/webapp` Root Directory. `apps/webapp/vercel.json` records the framework
choice.

Add these GitHub Actions repository secrets:

| Secret              | Purpose                             |
| ------------------- | ----------------------------------- |
| `VERCEL_TOKEN`      | Vercel access token used by the CLI |
| `VERCEL_ORG_ID`     | Vercel account or team ID           |
| `VERCEL_PROJECT_ID` | ID of the linked Scout project      |

The organization and project IDs are available in `.vercel/project.json` after
running `vercel link`. The `.vercel` directory is intentionally ignored and
must not be committed.

Create GitHub environments named `preview` and `production`. Environment
protection rules should require approval before production deployment. Keep
the Production environment restricted to maintainers who are authorized to
release.

Configure `HOMEDATA_API_KEY` separately for Preview and Production. Do not copy
production credentials into Preview.

## Troubleshooting

### Preview was skipped

Fork pull requests intentionally skip deployment. For internal branches, confirm
the Vercel secrets exist and all prerequisite jobs passed.

### Preview or Production uses the wrong configuration

Confirm the matching Vercel environment contains the expected variables and
rerun the workflow after correcting Vercel configuration.

### Vercel expects a `public` output directory

The project is configured as a generic static site. In Vercel Project Settings:

1. set Root Directory to `apps/webapp`;
2. set Framework Preset to **Next.js**;
3. clear Output Directory so it uses automatic framework detection.

Do not set Output Directory to `public` or `.next` for this application.
When using Vercel CLI from this monorepo, run it from the repository root. Do
not also set its working directory to `apps/webapp`, because the project Root
Directory would then be applied twice.

### GitHub Release was not created

The release job runs only for `v*` tags and only after Production deployment
succeeds. Confirm the tag exists remotely, the deployment job passed, and the
workflow token has `contents: write` permission for the release job.

## Rollback

For Preview, push a correction or close the pull request.

For the shared `develop` Preview, revert or fix the change on `develop`; the
next successful push creates a replacement Preview deployment.

For Production, use the Vercel dashboard to restore a known-good deployment
when immediate mitigation is required. Then revert or fix the source through a
pull request, verify Preview, and publish a new patch release so source history,
the production artifact, and the GitHub Release history converge.
