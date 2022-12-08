FROM containerbase/node:18.12.1@sha256:1d8dd391a695e17c68cc5d92f0809f9c55cdf13279b0bea6f8536b074209ce7a

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.0

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.30


RUN install-apt make shellcheck
