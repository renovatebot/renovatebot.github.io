FROM containerbase/buildpack:4.16.8@sha256:7fbb21fe2441a497b12e1fb3076e6799fcf9a37189906f4500dfff559591eb99 AS buildpack

FROM ubuntu:20.04@sha256:450e066588f42ebe1551f3b1a535034b6aa46cd936fe7f2c6b0d72997ec61dbd as base

# required for gitpod
# https://www.gitpod.io/docs/configure/workspaces/workspace-image#custom-base-image
# https://github.com/gitpod-io/workspace-images/blob/main/base/Dockerfile

ARG USER_NAME=gitpod
ARG USER_ID=33333

# Set env and shell
ENV BASH_ENV=/usr/local/etc/env ENV=/usr/local/etc/env PATH=/home/$USER_NAME/bin:$PATH
SHELL ["/bin/bash" , "-c"]

# This entry point ensures that dumb-init is run
#ENTRYPOINT [ "docker-entrypoint.sh" ]


# Set up buildpack
COPY --from=buildpack /usr/local/bin/ /usr/local/bin/
COPY --from=buildpack /usr/local/buildpack/ /usr/local/buildpack/
RUN install-buildpack

# renovate: datasource=github-tags packageName=git/git
RUN install-tool git v2.38.1
# renovate: datasource=github-releases depName=docker lookupName=moby/moby
RUN install-tool docker 20.10.7

# renovate: datasource=docker versioning=docker
RUN install-tool node 18.12.0
# renovate: datasource=npm versioning=npm
RUN install-tool yarn 1.22.10

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.10.8
# renovate: datasource=pypi
RUN install-pip pipenv 2022.10.25


RUN set -ex; \
  install-apt make shellcheck sudo locales; \
  locale-gen en_US.UTF-8

RUN set -ex; \
  echo "$USER_NAME:$USER_NAME" | chpasswd; \
  adduser $USER_NAME sudo; \
  sed -i.bkp -e 's/%sudo\s\+ALL=(ALL\(:ALL\)\?)\s\+ALL/%sudo ALL=NOPASSWD:ALL/g' /etc/sudoers

RUN set -ex; mkdir /workspace; chown -hR $USER_NAME:$USER_NAME /workspace

RUN git config --system --add safe.directory '*'

USER gitpod

