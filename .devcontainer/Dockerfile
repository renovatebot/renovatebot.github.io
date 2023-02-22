FROM containerbase/node:18.14.2@sha256:14d259658a4ca18847e7044f3f2ee39ec0a1efa63d19078e9579ced83b7ee35e

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
