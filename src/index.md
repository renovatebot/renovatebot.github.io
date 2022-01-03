![Renovate banner](https://app.renovatebot.com/images/whitesource_renovate_660_220.jpg)

# Renovate documentation

Renovate (often referred to as "Renovate Bot") is an Open Source tool to automate:

- Detecting dependencies in a repository (Open Source and private/closed source)
- Checking if there are newer versions which can be updated to
- Creating commits and Merge/Pull Requests to apply such changes, and show the Release Notes (if available)

## Renovate's purpose

Renovate was created to address the problem of stale/out-of-date dependencies in software projects.
Most projects start with up-to-date dependencies, but fall behind over time.
Not only are such projects missing out on bug fixes or new features, but they also suffer from the following indirect consequences:

- Getting further into "technical debt" by increasing the amount of custom code using deprecated APIs
- Increasing the time-to-resolution of vulnerabilities due to the risk of performing large jumps of dependency versions under stress

Renovate's automation capabilities mean that projects which previously fell behind with dependency versions can stay up-to-date, while diligent developers who previously kept dependencies up-to-date manually are now free to focus that saved time on more important duties.

## Renovate development and use

The source code for Renovate is available on GitHub ([renovatebot/renovate](https://github.com/renovatebot/renovate)), where most of the development is done.
Renovate was created by [WhiteSource](https://www.whitesourcesoftware.com/) staff and they continue to push Renovate forward, but is also made possible through more than 500 outside contributors.

Renovate is distributed as [an Open Source npm package](https://www.npmjs.com/package/renovate), as [pre-built Open Source images on Docker Hub](https://hub.docker.com/repository/docker/renovate/renovate), or as a [free GitHub App](https://github.com/marketplace/renovate) hosted by WhiteSource.

## About these docs

These Renovate docs are built from Markdown files in [Renovate's Open Source repos](https://github.com/renovatebot/) to provide a convenient way to browse and search help topics.
The majority can be found in the [main Renovate repository](https://github.com/renovatebot/renovate/tree/main/docs/usage).
