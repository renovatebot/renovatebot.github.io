FROM ghcr.io/containerbase/node:18.15.0@sha256:cfdd74d2c66d613eff07d9763943b9e065c77756e4661b87070f0c627fc796c7

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.2

# renovate: datasource=pypi
RUN install-pip pipenv 2023.3.20


RUN install-apt make shellcheck
