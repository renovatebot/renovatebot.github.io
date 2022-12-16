FROM containerbase/node:18.12.1@sha256:e46734b92d813f6b40cc691f95bdd557425eddeec037d4c38fa06d3e7d06edfb

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.30


RUN install-apt make shellcheck
