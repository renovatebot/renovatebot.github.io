FROM ghcr.io/containerbase/gitpod:13.4.5

# renovate: datasource=pypi
RUN install-tool pdm 2.22.0

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
