FROM containerbase/node:18.14.2@sha256:a72354f9adea2a6b7230c64403f77a13a201e2356843e012f3be5edd259adec1

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
