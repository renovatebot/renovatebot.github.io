FROM ghcr.io/containerbase/devcontainer:14.0.0

# renovate: datasource=pypi
RUN install-tool pdm 2.26.6

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
