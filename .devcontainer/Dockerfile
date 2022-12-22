FROM containerbase/node:18.12.1@sha256:4d715891ea9a6434201991c4e5b31c11b0e19b10ddb4e45d7cb6acdf79f5a89b

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
