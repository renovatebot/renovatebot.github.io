FROM containerbase/node:18.14.2@sha256:5bd153416a969e3eaccaab8c5f9c98c753fbc7d1912e7965a99acea07e0b89aa

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
