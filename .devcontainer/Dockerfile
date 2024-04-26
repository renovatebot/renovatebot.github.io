FROM ghcr.io/containerbase/devcontainer:10.3.18

# renovate: datasource=pypi
RUN install-tool poetry 1.8.2

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
