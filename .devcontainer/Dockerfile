FROM containerbase/node:18.13.0@sha256:2cce806dd2b5c54427edbe7b682ca06bffe7287eb3001eb3c807960609667522

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
