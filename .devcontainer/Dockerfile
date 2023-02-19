FROM containerbase/node:18.14.1@sha256:a1c21e163dc74321763e307186296b388956b4933e288f8a39399a8af1094882

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
