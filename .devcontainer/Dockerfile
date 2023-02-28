FROM containerbase/node:18.14.2@sha256:c2a0ae2585fd58e07bc648b125ffec66d6a157368c30da4a3ec730558f0693a6

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
