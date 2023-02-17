FROM containerbase/node:18.14.1@sha256:14c0635710604c765c735d745dc31ef6d5b59ed6ca47c372dd19d32d28328238

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
