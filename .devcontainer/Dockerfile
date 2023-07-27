FROM ghcr.io/containerbase/node:18.17.0

USER root

RUN install-apt make shellcheck

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.4

# renovate: datasource=pypi
RUN install-tool pipenv 2023.7.23

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

USER ubuntu
