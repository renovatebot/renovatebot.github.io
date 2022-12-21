FROM containerbase/node:18.12.1@sha256:f9706b2f3666b6270fe694cdaf4c39c2efec4b9ad7fad4d891fbde36bb5e4818

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.17


RUN install-apt make shellcheck
