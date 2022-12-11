FROM containerbase/node:18.12.1@sha256:8072c03a4c13cecdafe08405db2575d029420a027f8df82b384c465778ea8804

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.30


RUN install-apt make shellcheck
