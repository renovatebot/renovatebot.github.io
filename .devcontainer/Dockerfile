FROM containerbase/node:18.13.0@sha256:bbbf1b8d76f3f508bf4dd9f0b723904153df67597bc2d02189a15cb3052ccccc

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
