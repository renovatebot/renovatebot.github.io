FROM ghcr.io/containerbase/devcontainer:13.19.0

# renovate: datasource=pypi
RUN install-tool pdm 2.25.9

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
