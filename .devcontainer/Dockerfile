FROM ghcr.io/containerbase/node:18.15.0@sha256:4a703da675413ca46b25a066cfbb42d9a2abd0fb12e2edd22114e1f081e1fabd

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
