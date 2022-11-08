FROM containerbase/node:18.12.1@sha256:fe459c9670594c2beb3dfbbd23c51905e6f85c865735f88265790d47bc569a9e

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.0

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.5


RUN install-apt make shellcheck
