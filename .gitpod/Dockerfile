FROM ghcr.io/containerbase/gitpod:10.0.2

# renovate: datasource=pypi
RUN install-tool poetry 1.7.1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
