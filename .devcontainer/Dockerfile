FROM ghcr.io/containerbase/node:18.15.0@sha256:9242d234a62e8115286c8d77831b09f0a7def66da6f6e0c26f150416a5142383

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
