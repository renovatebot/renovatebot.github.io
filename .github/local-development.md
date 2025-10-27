# Local Development

This document gives tips and tricks on how to create the Renovate documentation website locally to add features or fix bugs.
You can improve this documentation by opening a pull request.
For example, if you think anything is unclear, or you think something needs to be added, open a pull request!

> [!NOTE]
> Currently, there is no support for a "remote" development environment, such as GitHub Codespaces.
>
> For updates on progress, see: https://github.com/renovatebot/renovatebot.github.io/issues/704

## Local installation

### Prerequisites

You need the following dependencies for local development:

- Git
- Node.js `>=14.15.4`
- Yarn `^1.22.5`
- Python `^3.9.1`
- Bash shell with `make`
- [PDM](https://pypi.org/project/pdm/) `2.26.0`

We support Node.js versions according to the [Node.js release schedule](https://github.com/nodejs/Release#release-schedule).

## Fork and Clone

If you want to contribute to the project, you should first "fork" the main project using the GitHub website and then clone your fork locally.
The Renovate project uses the [Yarn](https://github.com/yarnpkg/yarn) package management system instead of npm.

To ensure everything is working properly on your end, you must:

1. Make sure you don't have a local `.npmrc` file that overrides npm's default registry
1. Run `make` to install all dependencies and make a build
1. Serve the build of the website locally with `mkdocs serve`

Before you submit a pull request you should:

1. Ensure your feature branch is up-to-date with the upstream `main` branch
1. Run `make` to install all dependencies and make a build
1. Serve the build of the website locally with `mkdocs serve`

## Keeping your Renovate fork up to date

First of all, never commit to `main` of your fork - always use a branch like `style/fix-css-error`.

Make sure your fork's `main` branch is up to date with the upstream `main` before creating a new branch, read the [GitHub docs, syncing a fork](https://help.github.com/articles/syncing-a-fork/).

If you're working with Git locally, you need to configure the remote branch correctly, read the[GitHub docs, configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/) to learn how to do this.
