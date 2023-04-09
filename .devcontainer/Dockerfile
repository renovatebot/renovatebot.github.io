FROM ghcr.io/containerbase/node:18.15.0@sha256:d7bd3e320e60dfd51a5b4ddbb01929f18d8c54b00c6f9d706e6dcfbc17dfee1e

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
