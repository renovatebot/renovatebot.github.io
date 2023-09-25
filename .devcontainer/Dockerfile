FROM ghcr.io/containerbase/node:18.17.1

USER root

RUN install-apt make shellcheck

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.5

# renovate: datasource=pypi
RUN install-tool pipenv 2023.9.8

# renovate: datasource=npm
RUN install-tool corepack 0.20.0

USER ubuntu
