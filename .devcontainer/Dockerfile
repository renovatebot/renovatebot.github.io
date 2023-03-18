FROM containerbase/node:18.15.0@sha256:a016596a25881969543284c8e1d54b9ed08175ab03a99520a8950914d60a0acc

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.2.18


RUN install-apt make shellcheck
