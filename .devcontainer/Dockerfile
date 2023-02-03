FROM containerbase/node:18.14.0@sha256:303dfd32b89b293bcd53f3685edcf22576443bc35a61cedc911b1ac88882c711

USER root

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.1

# renovate: datasource=pypi
RUN install-pip pipenv 2022.12.19


RUN install-apt make shellcheck
