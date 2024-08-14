FROM ghcr.io/containerbase/gitpod:11.10.0

# renovate: datasource=pypi
RUN install-tool pdm 2.18.0

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
