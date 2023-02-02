FROM containerbase/node:18.13.0@sha256:fd2297e87fd240865faa17f864517fb1d31e37f38f3557596724f357f80a4452

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
