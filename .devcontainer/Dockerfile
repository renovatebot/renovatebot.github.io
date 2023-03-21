FROM containerbase/node:18.15.0@sha256:3c89fc489f4d2c46d3f8e2da86421b87ad7d6b344e69465deb3d3a6a6f0fff9e

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.2.18


RUN install-apt make shellcheck
