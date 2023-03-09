FROM containerbase/node:18.14.2@sha256:610968ff3eedf7f914d7fbc8aef1e6c8e3e2e13d8c23fe075d085ec03ea28554

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.2.18


RUN install-apt make shellcheck
