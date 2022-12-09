FROM containerbase/node:18.12.1@sha256:5945a1f204b64b196021d656be8111f752bf546b9aec154c0901f3757b651fac

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.0

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.30


RUN install-apt make shellcheck
