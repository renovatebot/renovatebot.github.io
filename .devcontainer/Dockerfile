FROM containerbase/node:18.15.0@sha256:8dac04e5d94c0ee0680ba225e1b2fa495b33f2e8de1c975f8f7e80844226a63f

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.2.18


RUN install-apt make shellcheck
