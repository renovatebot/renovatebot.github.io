FROM ghcr.io/containerbase/devcontainer:11.11.25

# renovate: datasource=pypi
RUN install-tool pdm 2.18.2

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
