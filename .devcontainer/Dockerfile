FROM ghcr.io/containerbase/node:18.16.0

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.3

# renovate: datasource=pypi
RUN install-pip pipenv 2023.5.19


RUN install-apt make shellcheck
