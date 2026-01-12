FROM ghcr.io/containerbase/devcontainer:13.25.24

# renovate: datasource=pypi
RUN install-tool pdm 2.26.4

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
