FROM containerbase/node:18.12.1@sha256:dcc003a3b175962d7e08ae39c653a6640532bc6cc2565398b8dc82348da83493

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
