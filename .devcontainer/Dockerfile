FROM containerbase/node:18.15.0@sha256:6c87133e7713b71b14d639bb3fa5e05d3569f7a60cf5ee1eaeeea054b5ca95df

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.2.18


RUN install-apt make shellcheck
