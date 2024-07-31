FROM ghcr.io/containerbase/devcontainer:11.6.0

# renovate: datasource=pypi
RUN install-tool poetry 1.8.3

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
