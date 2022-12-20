FROM containerbase/node:18.12.1@sha256:b4c3ffea31f61df7723ba1496dbbc8bebae0afa3dfed2d90c363b65edb012325

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.17


RUN install-apt make shellcheck
