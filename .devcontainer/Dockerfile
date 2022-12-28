FROM containerbase/node:18.12.1@sha256:d02df98f38fdbacf46ad5a22882e32e61edb6210a7d5e60db466a2d592fb33c8

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
