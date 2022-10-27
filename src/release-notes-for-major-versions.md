---
edit_url: https://github.com/renovatebot/renovatebot.github.io/edit/main/src/release-notes-for-major-versions.md
---

# Release notes for major versions of Renovate

It can be hard to keep track of the changes between major versions of Renovate.
To help you, we've listed the breaking changes, plus the developer commentary for the latest major releases.

The most recent versions are always at the top of the page.
This is because recent versions may revert changes made in an older version.
You also don't have to scroll to the bottom of the page to find the latest release notes.

## Version 34

### Breaking changes

- Revert `branchNameStrict` to `false`

### Commentary

Here comes v34 hot on the heels of v33.
We decided to issue another breaking change to revert one of the breaking changes in v33.

If you are upgrading from v32 to v34 then it means that the setting for `branchNameStrict` remains as `false` and you don't need to worry about that.

If you already upgraded from v32 to v33 then you have a decision to make first:

- set `branchNameStrict` to `true` (like in v33),
- or let it set back to `false` (like in v32).

Strict branch naming meant that all special characters other than letters, numbers and hyphens were converted to hyphens and then deduplicated, e.g. a branch which in v32 was like `renovate/abc.def-2.x` would become `renovate/abc-def-2-x` in v33.
If you prefer to revert back to the old way then that will happen automatically in v34.
If you prefer to keep the way in v33 because you already had a bunch of PRs closed and reopened due to branch names, and don't want to do that again, then add `branchNameStrict: false` to your bot config or your shared config before updating to v34.

Apologies to anyone negatively affected by this v33 change.

### Link to release notes

[Release notes for `v34` on GitHub](https://github.com/renovatebot/renovate/releases/tag/34.0.0).

## Version 33

### Breaking changes

- Node 16 is the required runtime for Renovate
- [NOTE: This was reverted in `v34`] **config:** `branchNameStrict` default value is now `true`
- **config:** `internalChecksFilter` default value is now `"strict"`
- **config:** `ignoreScripts` default value is now `true`. If `allowScripts=true` in global config, `ignoreScripts` must be set to `false` in repo config if you want all repos to run scripts
- **config:** `autodiscover` filters can no longer include commas
- **config:** boolean variables must be `true` or `false` when configured in environment variables, and errors will be thrown for invalid values. Previously invalided values were ignored and treated as `false`
- **datasource/go:** `git-tags` datasource will be used as the fallback instead of `github-tags` if a go package's host type is unknown
- **jsonnet-bundler:** `depName` now uses the "absolute import" format (e.g. `bar`-> `github.com/foo/bar/baz-wow`)
- **azure-pipelines:** azure-pipelines manager is now disabled by default
- **github:** No longer necessary to configure forkMode. Forking mode is now experimental
- Users of `containerbase` images (such as official Renovate images) will now have dynamic package manager installs enabled by default
- Dependencies are no longer automatically pinned if `rangeStrategy=auto`, pinning must be opted into using `rangeStrategy=pin`

### Commentary

This release contains some changes of default values/behavior:

- `internalChecksFilter` will now default to `strict`, meaning that updates will be withheld by default when internal status checks are pending. This should reduce the number of "non-actionable" Pull Requests you get
- `azure-pipelines` manager is disabled by default, because its primary datasource can unfortunately suggest updates which aren't yet installable. Users should opt into this manager once they know the risks
- `binarySource=install` will now be used instead of `global` whenever Renovate is run within a "containerbase" image. This means dynamic installation of most package managers and languages
- Dependencies will no longer be pinned by default if `rangeStrategy=auto`. While we recommend pinning dependencies, we decided users should opt into this more explicitly

And two major features!

- AWS CodeCommit platform support
- OpenTelemetry support

Both the above are considered "experimental".
Please test them out and let us know your feedback - both positive or negative - so that we can progress them to fully available.

### Link to release notes

[Release notes for `v33` on GitHub](https://github.com/renovatebot/renovate/releases/tag/33.0.0).
