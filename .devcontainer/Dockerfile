FROM ghcr.io/containerbase/devcontainer:13.0.25

# renovate: datasource=pypi
RUN install-tool pdm 2.21.0

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
