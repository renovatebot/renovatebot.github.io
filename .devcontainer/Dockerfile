FROM containerbase/node:18.12.0@sha256:f3b899f555e17309fbb9176e62322e75dc2e09e7cf16e6f6d76d4b57a3e8a239

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.0

# renovate: datasource=pypi
RUN install-pip pipenv 2022.10.25


RUN install-apt make shellcheck
