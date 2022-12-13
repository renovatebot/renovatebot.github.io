FROM containerbase/node:18.12.1@sha256:4fc5d34552236970bf36bf05ffae36e99f78d2c383e7f03cd56dc0500f536cc1

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.30


RUN install-apt make shellcheck
