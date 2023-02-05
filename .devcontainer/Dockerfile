FROM containerbase/node:18.14.0@sha256:9801f4462cd17f67f2d3c0c1945f2bf06778f6b722a8c8881b99867050b81e53

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
