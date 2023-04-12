FROM ghcr.io/containerbase/node:18.15.0@sha256:72fa4d274b5e343ac0a0f05ba230b1beb16c915f30d87dbeafddc20e985c17f9

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.3

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
