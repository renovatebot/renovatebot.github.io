FROM ghcr.io/containerbase/devcontainer:13.7.1

# renovate: datasource=pypi
RUN install-tool pdm 2.22.2

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
