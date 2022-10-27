FROM containerbase/node:18.12.0@sha256:e3914c9144cc6f08cbca4e4e089912a5a304f7ee9830b27ec150276dbaf77bbc

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.10.8

# renovate: datasource=pypi
RUN install-pip pipenv 2022.10.25


RUN install-apt make shellcheck
