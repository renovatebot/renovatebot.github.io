FROM containerbase/node:18.14.0@sha256:c2ac2ff78bd63ea7eb09c3065c94c1c5f6649edbb06b8c0a6e3dffe8bf88cfd0

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
