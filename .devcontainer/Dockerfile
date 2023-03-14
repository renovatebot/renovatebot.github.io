FROM containerbase/node:18.15.0@sha256:5c0dbacb3043a43551df6c79b6c34ee99d31edb0e063080fc8d85d19759f3c97

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.2.18


RUN install-apt make shellcheck
