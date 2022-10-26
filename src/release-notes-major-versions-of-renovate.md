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
- let it set back to `false` (like in v32).

Strict branch naming meant that all special characters other than letters, numbers and hyphens were converted to hyphens and then deduplicated, e.g. a branch which in v32 was like `renovate/abc.def-2.x` would become `renovate/abc-def-2-x` in v33.
If you prefer to revert back to the old way then that will happen automatically in v34.
If you prefer to keep the way in v33 because you already had a bunch of PRs closed and reopened due to branch names, and don't want to do that again, then add `branchNameStrict: false` to your bot config or your shared config before updating to v34.

Apologies to anyone negatively affected by this v33 change.

### Link to release notes

[Release notes for `v34` on GitHub](https://github.com/renovatebot/renovate/releases/tag/34.0.0).

## Version 33

### Breaking changes

Someone with `write` rights to the release notes on `renovatebot/renovate`: please copy/paste the notes in here.
Otherwise I need to re-do all the basic formatting like bold text, monospaced fonts, list item layout.

### Commentary

We don't have any official commentary for these release notes.
Rarkins should probably write something up and put that in the release notes as well.

### Link to release notes

[Release notes for `v33` on GitHub](https://github.com/renovatebot/renovate/releases/tag/33.0.0).
