# Local Development

This document gives tips and tricks on how to create the Renovate documentation website locally to add features or fix bugs.
You can improve this documentation by opening a pull request.
For example, if you think anything is unclear, or you think something needs to be added, open a pull request!

## Installation

### Prerequisites

You need the following dependencies for local development:

- Git
- Node.js `>=14.15.4`
- Yarn `^1.22.5`
- Python `^3.9.1`
- Bash shell with `make`

We support Node.js versions according to the [Node.js release schedule](https://github.com/nodejs/Release#release-schedule).

_Linux_

You can use the following commands on Ubuntu.

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install -y git python-minimal build-essential nodejs yarn
```

_Windows_

Windows users should use Windows Subsystem for Linux version 2.

Read the [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/) to learn more about WSL.

Read the [VSCode documentation, Developing in WSL](https://code.visualstudio.com/docs/remote/wsl) to learn how to use WSL and VS Code.

## Fork and Clone

If you want to contribute to the project, you should first "fork" the main project using the GitHub website and then clone your fork locally.
The Renovate project uses the [Yarn](https://github.com/yarnpkg/yarn) package management system instead of npm.

To ensure everything is working properly on your end, you must:

1. Make sure you don't have a local `.npmrc` file that overrides npm's default registry
1. Install all npm dependencies with `yarn install`
1. Install all Python dependencies with `pip install -r requirements.txt`
1. Make a build with `make`
1. Serve the build of the website locally with `mkdocs serve`

You only need to do these 5 steps this one time.

Before you submit a pull request you should:

1. Install newer npm dependencies with `yarn install`
1. Install newer Python dependencies with `pip install -r requirements.txt`
1. Make a build with `make`
1. Serve your build locally with `mkdocs serve` and inspect if everything is working

## Tests

### Prerequisites

<!-- TODO: Once we have Jest working with Docusaurus, explain how to set it up. -->

### Jest

<!-- TODO: setup snapshot tests with Jest on React components. -->

### Coverage

<!-- TODO: fill in once we have tests and a coverage bot -->

## Linting and formatting

<!--- TODO: Once Prettier is setup, explain how to use it. -->

## Keeping your Renovate fork up to date

First of all, never commit to `build` of your fork - always use a branch like `style/fix-css-error`.

Then, make sure your fork is up to date with `build` each time before creating a new branch.
To do this, see these GitHub guides:

[Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

[Syncing a fork](https://help.github.com/articles/syncing-a-fork/)
