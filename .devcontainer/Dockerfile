FROM ghcr.io/containerbase/node:20.9.0

USER root

RUN install-apt make shellcheck

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.12.0

# renovate: datasource=pypi
RUN install-tool pipenv 2023.10.24

# renovate: datasource=npm
RUN install-tool corepack 0.21.0

USER ubuntu
