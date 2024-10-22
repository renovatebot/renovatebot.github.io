FROM ghcr.io/containerbase/gitpod:12.0.10

# renovate: datasource=pypi
RUN install-tool pdm 2.19.3

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
