FROM containerbase/node:18.14.2@sha256:cb68fa4baae8632f43734cd9d98a80cf0a3c6a6f7898beb4173563a1ddd98a80

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
