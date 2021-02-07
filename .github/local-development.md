# Local Development

This document gives tips and tricks on how to create the Renovate documentation website locally to add features or fix bugs.
You can improve this documentation by opening a pull request.
For example, if you think anything is unclear, or you think something needs to be added, open a pull request!

## Installation

### Prerequisites

You need the following dependencies for local development:

- Git
- Node.js `^12.13.0 || >=14.15.0`
- Yarn `^1.17.0`
- Python `^3.8`
- Bash shell with `make`

We support Node.js versions according to the [Node.js release schedule](https://github.com/nodejs/Release#release-schedule).

_Linux_

You can use the following commands on Ubuntu.

```sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install -y git python-minimal build-essential nodejs yarn
```

_Windows_

QUESTION: Git Bash for Windows does not come with `make` by default, how should a user work around this? Or is Windows not supported for making the docs locally?

Follow these steps to set up your development environment on Windows 10.
If you already installed a component, skip the corresponding step.

- Install [Git](https://git-scm.com/downloads). Make sure you've [configured your username and email](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- Install [Node.js LTS](https://nodejs.org/en/download/)
- In an Administrator PowerShell prompt, run `npm install -global npm` and then `npm --add-python-to-path='true' --debug install --global windows-build-tools`
- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

  Verify you're using the appropriate versions:

  ```powershell
  PS C:\Windows\system32> git --version
  git version 2.29.0.windows.1
  PS C:\Windows\system32> node --version
  v14.15.0
  PS C:\Windows\system32> yarn --version
  1.22.4
  PS C:\Windows\system32> python --version
  Python 3.8.1
  ```

## Fork and Clone

If you want to contribute to the project, you should first "fork" the main project using the GitHub Website and then clone your fork locally.
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
