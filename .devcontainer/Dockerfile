FROM ghcr.io/containerbase/devcontainer:13.25.22

# renovate: datasource=pypi
RUN install-tool pdm 2.26.3

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
