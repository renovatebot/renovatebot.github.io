FROM ghcr.io/containerbase/devcontainer:10.1.3

# renovate: datasource=pypi
RUN install-tool poetry 1.7.1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
