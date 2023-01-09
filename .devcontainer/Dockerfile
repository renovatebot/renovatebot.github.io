FROM containerbase/node:18.13.0@sha256:bb5e281c16a86f73b78d75fb1d9849f451c87ac19d53a6e63b16e2163c600513

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
