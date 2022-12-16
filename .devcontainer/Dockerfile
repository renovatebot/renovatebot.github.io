FROM containerbase/node:18.12.1@sha256:43e9bd267bd89357d9c7c0fffb847eaa27f24b5483053c11dbad6a617ed0ce57

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.11.30


RUN install-apt make shellcheck
