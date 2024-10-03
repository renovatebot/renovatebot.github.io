FROM ghcr.io/containerbase/gitpod:12.0.1

# renovate: datasource=pypi
RUN install-tool pdm 2.19.1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
