FROM containerbase/node:18.13.0@sha256:7d88bfbd3a6ebe3aeb521cb568ad2dd669bc37879eeccc4d112bef408a097b75

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
