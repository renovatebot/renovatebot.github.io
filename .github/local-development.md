# Local Development

This document gives tips and tricks on how to create the Renovate documentation website locally - or develop with Gitpod - to add features or fix bugs.
You can improve this documentation by opening a pull request.
For example, if you think anything is unclear, or you think something needs to be added, open a pull request!

## Gitpod

The quickest way to get started is to use Gitpod.

1. Create a Gitpod account - if you haven't got an account already - you can use your GitHub account credentials to create an account with Gitpod.
1. You may need to change the following Gitpod environment variables so they match your username/email on GitHub:
   - `GIT_AUTHOR_EMAIL`
   - `GIT_AUTHOR_NAME`
   - `GIT_COMMITTER_EMAIL`
1. Before you start work, you _must_ fork the `renovatebot/renovatebot.github.io` repository into your personal account.

### Pull request workflow

1. Make sure the `main` branch of your fork is up-to-date with the upstream repository, you can sync your fork with a button in the GitHub interface
1. Open your forks "homepage", and prefix the current URL with `https://gitpod.io/#`, for example: `https://gitpod.io/#https://github.com/your-user-name/renovatebot.github.io` and press <kbd>Enter</kbd>
1. Gitpod will open in the same browser window and ask you to login
1. Create a new Git branch in the Gitpod workspace and switch to it
1. Work on the feature/bug/refactor
1. Remember to `git push` your work to the fork before closing your workspace
1. You can now close the workspace and create your new PR via the GitHub interface

## Local installation

### Prerequisites

You need the following dependencies for local development:

- Git
- Node.js `>=14.15.4`
- Yarn `^1.22.5`
- Python `^3.9.1`
- Bash shell with `make`

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
