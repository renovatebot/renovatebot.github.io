FROM containerbase/node:18.12.1@sha256:3933747c2635ec1941864ee44645492c89705891c2fc70da5d6f8a198753d393

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
