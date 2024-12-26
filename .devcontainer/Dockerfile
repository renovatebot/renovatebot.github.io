FROM ghcr.io/containerbase/devcontainer:13.5.3

# renovate: datasource=pypi
RUN install-tool pdm 2.22.1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
