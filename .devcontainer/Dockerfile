FROM containerbase/node:18.13.0@sha256:da4f6003b6ad6336c0860adc3ad14aaf57798d80aca02b9350a99373bd6810c8

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
