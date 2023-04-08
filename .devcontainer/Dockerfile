FROM ghcr.io/containerbase/node:18.15.0@sha256:d8906c159c6c9fc5f5989a74913b2cad2f1f81c19998563fea095a2ba8a66ffd

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
