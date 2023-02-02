FROM containerbase/node:18.13.0@sha256:cdceaa1b5b3bf442183b755e345fec5fad6b12c70e3202b5a45fa07f68d682fc

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
