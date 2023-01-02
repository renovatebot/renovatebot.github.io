FROM containerbase/node:18.12.1@sha256:d3a2960fe8c07584f85d974071c0b8687288bdac0d3dede088ff52a1ffff1a45

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
