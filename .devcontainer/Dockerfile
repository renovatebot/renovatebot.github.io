FROM containerbase/node:18.14.1@sha256:c9b8c25351b5fa0af7eaa30466f3664aa4757c7bb5bae5a00c7a8f6535a5012c

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
