FROM ghcr.io/containerbase/node:18.15.0@sha256:cde49f8d85b7cba865f9e12910207157765808c10c655e42940b2615f22a64fc

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
