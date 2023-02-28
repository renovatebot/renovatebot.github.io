FROM containerbase/node:18.14.2@sha256:d3817b7251a8b3389d759394171e84c5afb7352f61d5ed5b12703977673a444c

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
