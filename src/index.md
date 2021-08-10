![Renovate banner](https://app.renovatebot.com/images/whitesource_renovate_660_220.jpg)

# Renovate Documentation

Renovate (often referred to as "Renovate Bot") is an Open Source tool designed to automate the process of:

- Detecting dependencies in a repository (including both Open Source as well as private/closed source)
- Checking if there are newer versions which can be updated to
- Creating commits and Merge/Pull Requests to apply such changes, and include Release Notes if available

## Renovate's Purpose

Renovate was created to address the problem of stale/out-of-date dependencies in software projects.
Most projects start out on fully up-to-date dependencies, but over time fall further and further behind.
Not only are such projects missing out on bug fixes or utilizing new features, but they also suffer from the following indirect consequences too:

- Getting further into "technical debt" by increasing the amount of custom code using deprecated APIs
- Increasing the time-to-resolution of vulnerabilities due to the risk of performing large jumps of dependency versions under stress

Renovate's automation capabilities mean that projects which previously fell behind with dependency versions can now stay up-to-date, while diligent developers who had previously kept dependencies up-to-date manually are now free to focus that saved time on more important duties.

## Renovate Development and Use

Renovate source is available ([renovatebot/renovate](https://github.com/renovatebot/renovate) on GitHub), where most of the development is done.
Renovate was created by [WhiteSource](https://whitesourcesoftware.com) staff and they continue to push Renovate forward, but is also made possible through more than 400 outside contributors.

Renovate is distributed as [an Open Source npm package](https://npmjs.com/packages/renovate), as [pre-built Open Source images on Docker Hub](https://hub.docker.com/repository/docker/renovate/renovate), or as a [free GitHub App](https://github.com/marketplace/renovate) hosted by WhiteSource.

## About These Docs

These Renovate docs are built from markdown files in [Renovate's Open Source repos](https://github.com/renovatebot/) to provide a convenient way to browse and search help topics.
The majority can be found in the [main Renovate repository](https://github.com/renovatebot/renovate/tree/main/docs/usage).
