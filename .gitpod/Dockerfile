FROM ghcr.io/containerbase/gitpod:11.11.14

# renovate: datasource=pypi
RUN install-tool pdm 2.18.2

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
